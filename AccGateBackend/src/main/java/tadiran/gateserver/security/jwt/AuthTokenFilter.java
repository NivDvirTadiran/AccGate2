package tadiran.gateserver.security.jwt;

import java.io.IOException;
import java.time.Instant;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import io.jsonwebtoken.ExpiredJwtException;
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
import tadiran.gateserver.security.jwt.exception.TokenRefreshException;
import tadiran.gateserver.security.services.UserDetailsImpl;
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


    // Authorize (allow) all domains to consume the content
    ((HttpServletResponse) response).addHeader("Access-Control-Allow-Origin", "*");
    ((HttpServletResponse) response).addHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST");

    try {
      String jwt = parseJwt(request);
      if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
              String username = jwtUtils.getUserNameFromJwtToken(jwt);

              UserDetailsImpl userDetails = (UserDetailsImpl) userDetailsService.loadUserByUsername(username);
              if (userDetails.isCredentialsNonExpired()) {
                  UsernamePasswordAuthenticationToken authentication =
                          new UsernamePasswordAuthenticationToken(
                                  userDetails,
                                  null,
                                  userDetails.getAuthorities());
                  authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                  SecurityContextHolder.getContext().setAuthentication(authentication);
              }

        }
    } catch (Exception e) {
      logger.error("Cannot set user authentication: {}", e);
    }

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
