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
}
