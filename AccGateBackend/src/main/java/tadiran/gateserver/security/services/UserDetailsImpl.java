package tadiran.gateserver.security.services;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import tadiran.gateserver.config.PropertiesManager;
import tadiran.gateserver.models.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import tadiran.gateserver.repository.UserRepository;

public class UserDetailsImpl implements UserDetails {
  private static final Logger logger = LoggerFactory.getLogger(UserDetailsImpl.class);

  private static final long serialVersionUID = 1L;

  private Long id;

  private String username;

  private String email;

  @JsonIgnore
  private String password;

  private LocalDate passDate;

  private Collection<? extends GrantedAuthority> authorities;

  private boolean isAccountNonLocked;

  @Autowired
  UserRepository userRepository;

  public UserDetailsImpl(Long id, String username, String email, String password,
      Collection<? extends GrantedAuthority> authorities, LocalDate passDate, boolean isAccountNonLocked) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.authorities = authorities;
    this.passDate = passDate;
    this.isAccountNonLocked = isAccountNonLocked;
  }

  public static UserDetailsImpl build(User user) {
    List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.getERole().name()))
        .collect(Collectors.toList());

    return new UserDetailsImpl(
        user.getId(), 
        user.getUsername(), 
        user.getEmail(),
        user.getPassword(), 
        authorities,
        user.getPassLastModifiedOn(),
        user.isAccountNonLocked());
  }


  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  public Long getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return this.isAccountNonLocked;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return !isPassExpired();
  }

  public boolean isPassExpired() {
    if (this.passDate == null) { return true; }
    Long passExpDays = ((Long) PropertiesManager.getProperty("tadiran.gate.pass-exp-days", Long.class));
    LocalDate expireDay = this.passDate.plusDays(passExpDays);
    LocalDate currentDate = LocalDate.now();

    return currentDate.isAfter(expireDay);
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    UserDetailsImpl user = (UserDetailsImpl) o;
    return Objects.equals(id, user.id);
  }
}
