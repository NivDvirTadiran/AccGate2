package tadiran.gateserver.security.jwt;

import java.io.IOException;
import java.time.Instant;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import tadiran.gateserver.models.User;
import tadiran.gateserver.payload.response.MessageResponse;
import tadiran.gateserver.security.services.UserDetailsServiceImpl;

public class AuthTokenFilter extends OncePerRequestFilter {
  @Autowired
  private JwtUtils jwtUtils;

  @Autowired
  private UserDetailsServiceImpl userDetailsService;

  private static final Logger logger = LoggerFactory.getLogger(AuthTokenFilter.class);

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    boolean isAllowed = false;


    // Authorize (allow) all domains to consume the content
    ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "*");
    ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");


    if(/*request.getRequestURI().startsWith("/accGate") ||*/
            request.getRequestURI().endsWith("/styles.scss") ||
            request.getRequestURI().startsWith("/accGate/assets/") ||
            request.getRequestURI().endsWith("/auth/signin") ||
            request.getRequestURI().endsWith("/auth/signupadmin") ||
            request.getRequestURI().endsWith("/auth/register-form") ||
            request.getRequestURI().endsWith("/auth/replace-pass-form") ||
            request.getRequestURI().endsWith("/auth/signup") ||
            request.getRequestURI().endsWith("/index.html") ||
            request.getRequestURI().endsWith("/styles.css") ||
            request.getRequestURI().endsWith("/styles.scss") ||
            request.getRequestURI().matches( "/accGate/NotoSans-(?:Bold|Regular)\\.(?:woff|woff2|ttf)$") ||
            request.getRequestURI().matches( "/accGate/(?:scripts|(?:polyfills|vendor|main|runtime)-es2017|favicon)\\.(?:js|ico)$") ||
            request.getRequestURI().endsWith("/accGate") ||
            request.getRequestURI().endsWith("/login-main") ||
            request.getRequestURI().endsWith("/auth/tsv_codegeneratebyname") ||
            request.getRequestURI().endsWith("/auth/tsv_codegeneratebyemail") ||
            request.getRequestURI().endsWith("/auth/tsv_codevalidatebyname") ||
            request.getRequestURI().endsWith("/ExternalServices/zconnector/sendEmail") ||
            request.getRequestURI().startsWith("/accGate/login2")){
      isAllowed = true;
    }

    try {
      String jwt = parseJwt(request);
      if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
        String username = jwtUtils.getUserNameFromJwtToken(jwt);

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authentication =
            new UsernamePasswordAuthenticationToken(
                userDetails,
                null,
                userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        if (userDetails.isCredentialsNonExpired()) {
          isAllowed = true;
        }
      }
    } catch (Exception e) {
      logger.error("Cannot set user authentication: {}", e);
    }

    if (!isAllowed) {response.setStatus(HttpServletResponse.SC_FORBIDDEN);}
    filterChain.doFilter(request, response);


  }

  private String parseJwt(HttpServletRequest request) {
    String headerAuth = request.getHeader("Authorization");

    if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
      return headerAuth.substring(7, headerAuth.length());
    }

    return null;
  }
}
