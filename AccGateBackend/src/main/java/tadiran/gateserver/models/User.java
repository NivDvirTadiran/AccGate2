package tadiran.gateserver.models;

import lombok.Builder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import tadiran.gateserver.config.PropertiesManager;


import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})
})
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @Size(max = 120)
  private String password;

  private String confirm_password;

  private String phone;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "userid"),
        inverseJoinColumns = @JoinColumn(name = "roleid"))
  private Set<Role> roles = new HashSet<>();

  @OneToOne
  @JoinColumn(name = "sup", referencedColumnName = "user_id")
  private Sup sup=null;

  @OneToOne
  @JoinColumn(name = "agent", referencedColumnName = "agent_id")
  private Agent agent;

  @Column(nullable = true)
  private LocalDate pass_last_modified_on;

  private static final Logger logger = LoggerFactory.getLogger(User.class);

  @Column(name = "account_non_locked")
  private boolean accountNonLocked = true;

  @Column(name = "failed_attempt")
  public int failedAttempt;

  @Column(name = "lock_time")
  private LocalDateTime lockTime;

  public User() {
  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // sup_level values indicating SupervisorAdmin and Admin permission.
  static final int SUPERVISOR_ADMIN = 1;
  static final int ADMIN = 3;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    Set<Role> roles = new HashSet<Role>();
    if (this.getSup() != null) {
      if (this.getSup().getAgentId() != null) {
        roles.add(new Role(ERole.User));
      }

      switch (this.getSup().getSupLevel()) {
        case SUPERVISOR_ADMIN:
          roles.add(new Role(ERole.SupervisorAdmin));
          break;
        case ADMIN:
          roles.add(new Role(ERole.Admin));
          break;
        default:
          roles.add(new Role(ERole.SupervisorMonitor));
      }
    }
    else if (this.getAgent() != null) {
      roles.add(new Role(ERole.User));
    }
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

  public List<String> getRolesList() {
    setRoles(getRoles());
    List<String> rolesList = new ArrayList<String>();
    this.roles.forEach((role) -> rolesList.add(role.getERole().name()));
    return rolesList;
  }

  public List<String> getSupRolesList() {
    List<String> rolesList = new ArrayList<String>();
    if (this.getSup() != null) {
      switch (this.getSup().getSupLevel()) {
        case SUPERVISOR_ADMIN:
          rolesList.add(ERole.SupervisorAdmin.name());
          break;
        case ADMIN:
          rolesList.add(ERole.Admin.name());
          break;
        default:
          rolesList.add(ERole.SupervisorMonitor.name());
      }
    }
    else {
        rolesList.add(ERole.User.name());
    }

    return rolesList;
  }

  public boolean verifyERoleExist(ERole eRole) {
    logger.info("eRole.name(): " + eRole.name());
    logger.info("eRole.name(): " + getSupRolesList());
    return (getSupRolesList().toString().contains(eRole.name()));
  }

  public LocalDate getPassLastModifiedOn() {
    return pass_last_modified_on;
  }

  public void setPassLastModifiedOn(LocalDate passLastModifiedOn) {
    this.pass_last_modified_on = passLastModifiedOn;
  }

  public Sup getSup() {
    return sup;
  }

  public void setSup(Sup sup) {
    this.sup = sup;
  }

  public Agent getAgent() {
    return agent;
  }

  public void setAgent(Agent agent) {
    this.agent = agent;
  }

  public String getPhone() {
    return this.phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public boolean isAccountNonLocked() {
    this.accountNonLocked = ((this.accountNonLocked) ? true : accountNonLocked);
    return (accountNonLocked || this.unlockWhenTimeExpired());
  }

  public void setAccountNonLocked(boolean accountNonLocked) {
    this.accountNonLocked = accountNonLocked;
  }

  public LocalDateTime getLockTime() {
    return lockTime;
  }

  public void setLockTime(LocalDateTime lockTime) {
    this.lockTime = lockTime;
  }

  public int getFailedAttempt() {
    return failedAttempt;
  }

  public void setFailedAttempt(int failedAttempt) {
    this.failedAttempt = failedAttempt;
  }

  public boolean unlockWhenTimeExpired() {
    LocalDateTime currentTime = LocalDateTime.now();
    LocalDateTime lockTime = this.getLockTime();

    if (currentTime.isAfter(lockTime.plusMinutes(
            ((Integer) PropertiesManager.getProperty("tadiran.gate.lock-time-duration", Integer.class))))) {
      this.setAccountNonLocked(true);
      this.setLockTime(null);
      this.setFailedAttempt(0);

      return true;
    }

    return false;
  }
}
