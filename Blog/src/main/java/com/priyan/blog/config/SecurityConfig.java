package com.priyan.blog.config;

import com.priyan.blog.repositories.UserRepository;
import com.priyan.blog.security.BlogUserDetailsService;
import com.priyan.blog.security.JwtAuthenticationFilter;
import com.priyan.blog.services.AuthenticationService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

      @Bean
      public JwtAuthenticationFilter jwtAuthenticationFilter(AuthenticationService authenticationService) {
          return new JwtAuthenticationFilter(authenticationService);
      }

      @Bean
      public UserDetailsService userDetailsService(UserRepository  userRepository) {
          return new BlogUserDetailsService(userRepository);

      }

      @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http,JwtAuthenticationFilter jwtAuthenticationFilter) throws Exception {
          http
                  .authorizeHttpRequests(auth->auth
                          .requestMatchers(HttpMethod.POST, "/api/v1/auth").permitAll()
                          .requestMatchers(HttpMethod.GET, "/api/v1/posts").permitAll()
                          .requestMatchers(HttpMethod.GET, "/api/v1/categories/**").permitAll()
                          .requestMatchers(HttpMethod.GET, "/api/v1/tags/**").permitAll()
                          .anyRequest().authenticated()
                  )
                  .csrf(csrf->csrf.disable())
                  .sessionManagement(session->
                          session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                  ).addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
          return http.build();
      }

      @Bean
      public PasswordEncoder passwordEncoder() {
          return PasswordEncoderFactories.createDelegatingPasswordEncoder();
      }

      @Bean
      public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
          return config.getAuthenticationManager();
      }
}
