package tadiran.gateserver.security;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountExpiredException;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.StringUtils;
import tadiran.gateserver.security.services.ForgotPasswordService;
import tadiran.gateserver.security.services.UserDetailsImpl;
import tadiran.gateserver.security.services.UserDetailsServiceImpl;

import javax.annotation.Resource;

/**
 * <p>A custom Authentication provider. To create custom AuthenticationProvider, we need to implement the
 * AuthenticationProvider provide the implementation for the authenticate and support method.</p>
 */
public class CustomAuthenticationProvider implements AuthenticationProvider {
    private static final Logger logger = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

    @Resource
    UserDetailsServiceImpl userDetailsServiceImpl;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    ForgotPasswordService forgotPasswordService;


    /**
     * <p> The authenticate method to authenticate the request. We will get the username from the Authentication object and will
     * use the custom @userDetailsService service to load the given user.</p>
     * @param authentication
     * @return
     * @throws AuthenticationException
     */
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        final String username = (authentication.getPrincipal() == null) ? "NONE_PROVIDED" : authentication.getName();
        if (!StringUtils.hasText(username)) {
            throw new BadCredentialsException("invalid login details");
        }
        // get user details using Spring security user details service
        UserDetailsImpl userDetailsImpl = null;
        try {
            userDetailsImpl = (UserDetailsImpl) userDetailsServiceImpl.loadUserByUsername(username);
        } catch (UsernameNotFoundException exception) {
            userDetailsServiceImpl.unknownUserFailedLoginAttempt(username);
            throw new BadCredentialsException("invalid login details");
        }


        try {
            return createSuccessfulAuthentication(authentication, userDetailsImpl);
        } catch (BadCredentialsException exception) {
            userDetailsServiceImpl.userFailedLoginAttempt(userDetailsImpl);
            throw new BadCredentialsException("invalid login details");
        } catch (AccountExpiredException exception) {
            throw new AccountExpiredException("User credentials have expired");
        } catch (Exception e) {
            e.printStackTrace();
            throw new BadCredentialsException(e.getMessage());
        }

    }

    private Authentication createSuccessfulAuthentication(final Authentication authentication,
                                                          final UserDetailsImpl userDetailsImpl) throws AuthenticationException {
        String username = authentication.getName();
        String password = String.valueOf(authentication.getCredentials());

        if (userDetailsImpl != null /*&& userDetailsImpl.isCredentialsNonExpired()*/) {


            if (passwordEncoder.matches(password, userDetailsImpl.getPassword())) {

                if (!userDetailsImpl.isCredentialsNonExpired()) {
                    logger.info("userDetailsImpl.isCredentialsNonExpired()= " + userDetailsImpl.isCredentialsNonExpired());
                    throw new AccountExpiredException("User credentials have expired");
                }

                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(username, password, userDetailsImpl.getAuthorities());
                authenticationToken.setDetails(authentication.getDetails());
                userDetailsServiceImpl.userSuccessLoginAttempt(userDetailsImpl);
                return authenticationToken;
            }
        }

        if (forgotPasswordService.ValidateTemporaryPass(username, password)) {
            userDetailsServiceImpl.userSuccessLoginAttempt(userDetailsImpl);
            throw new AccountExpiredException("User credentials have expired");
        }

        throw new BadCredentialsException("invalid login details");
    }

    @Override
    public boolean supports(Class<?> authenticationType) {
        return UsernamePasswordAuthenticationToken.class.equals(authenticationType);
    }

}
