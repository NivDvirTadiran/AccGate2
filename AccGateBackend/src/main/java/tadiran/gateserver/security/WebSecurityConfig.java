package tadiran.gateserver.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import tadiran.gateserver.security.jwt.AuthEntryPointJwt;
import tadiran.gateserver.security.jwt.AuthTokenFilter;
import tadiran.gateserver.security.services.AgentDetailsServiceImpl;
import tadiran.gateserver.security.services.UserDetailsServiceImpl;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
    securedEnabled = true,
    jsr250Enabled = true,
    prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  UserDetailsServiceImpl userDetailsServiceImpl;

  @Autowired
  AgentDetailsServiceImpl agentDetailsService;

  @Autowired
  private AuthEntryPointJwt unauthorizedHandler;

  @Bean
  public AuthTokenFilter authenticationJwtTokenFilter() {
    return new AuthTokenFilter();
  }


  @Bean
  public CustomAuthenticationProvider authProvider() {
    return new CustomAuthenticationProvider();
  }

  @Override
  public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
    authenticationManagerBuilder
            .authenticationProvider(authProvider())
            .userDetailsService(userDetailsServiceImpl)
            .passwordEncoder(passwordEncoder());
  }

  @Bean
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    // Enable CORS and disable CSRF
    http = http.cors().and().csrf().disable();

    // Set session management to stateless
    http = http
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and();

    // Set unauthorized requests exception handler
    http = http
            .exceptionHandling()
            .authenticationEntryPoint(unauthorizedHandler)
            .and();

    // Set permissions on endpoints
    http.authorizeRequests()
            // Our public endpoints
            .antMatchers("/test/**").permitAll()
            .antMatchers("/auth/signin").permitAll()
            .antMatchers("/login2/").permitAll()
            .antMatchers("**/styles.scss").permitAll()
            .antMatchers("/login2/login-main").permitAll()
            .antMatchers("/assets/**").permitAll()
            .antMatchers("/accGate/NotoSans-(?:Bold|Regular)\\.(?:woff|woff2|ttf)$").permitAll()
            .antMatchers("/accGate/(?:scripts|(?:polyfills|vendor|main|runtime)-es2017|favicon)\\.(?:js|ico)$").permitAll()
            .regexMatchers("\\/(?:auth|accGate\\/auth)\\/tsv_code(?:generate|validate)by(?:name|email)$").permitAll()
            .regexMatchers("\\/(?:auth|accGate\\/auth)\\/(?:register-form|tsv_replace-pass-form|replace-pass-form|refreshtoken|forgotpassword)").permitAll()
            .antMatchers("/*").permitAll()
            // Our private endpoints
            .anyRequest().authenticated();

    // Add JWT token filter
    http.addFilterBefore(
            authenticationJwtTokenFilter(),
            UsernamePasswordAuthenticationFilter.class
    );
  }

  // Used by spring security if CORS is enabled.
  @Bean
  public CorsFilter corsFilter() {
    UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.addAllowedOrigin("https://localhost:4200");
    config.setAllowCredentials(false);
    config.addAllowedOrigin("*");
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
  }
}
