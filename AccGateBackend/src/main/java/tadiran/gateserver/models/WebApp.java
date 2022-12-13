package tadiran.gateserver.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "webapps")
public class WebApp {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Enumerated(EnumType.STRING)
  @Column(length = 20)
  private EWebApp eWebApp;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(  name = "webapp_roles",
          joinColumns = @JoinColumn(name = "webappid"),
          inverseJoinColumns = @JoinColumn(name = "roleid"))
  private Set<Role> roles = new HashSet<>();

  public WebApp() {

  }


  public WebApp(EWebApp eWebApp) {
    this.eWebApp = eWebApp;
    this.id = eWebApp.ordinal();
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public EWebApp getName() {
    return eWebApp;
  }

  public void setName(EWebApp eWebApp) {
    this.eWebApp = eWebApp;
  }

  public Set<Role> getRoles() {
    return this.roles;
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


  public Set<Role> getRequiredRoles() {

    Set<Role> roles = new HashSet<Role>();


    if (this.eWebApp != null) {
      switch (this.eWebApp) {
        case WA_GCCS:
          roles.add(new Role(ERole.SupervisorAdmin));
          roles.add(new Role(ERole.Admin));
          roles.add(new Role(ERole.SupervisorMonitor));
          break;
        case WA_ACCREALTIME:
          roles.add(new Role(ERole.SupervisorAdmin));
          roles.add(new Role(ERole.Admin));
          roles.add(new Role(ERole.SupervisorMonitor));
          break;
        case WA_AGENT:
          roles.add(new Role(ERole.User));
          break;
        case WA_ADMIN:
          roles.add(new Role(ERole.SupervisorAdmin));
          roles.add(new Role(ERole.Admin));
          break;
        default:
          roles.add(new Role(ERole.User));
      }
    }
    else {
      roles.add(new Role(ERole.User));
    }

    return roles;

  }

}
