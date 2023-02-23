package tadiran.gateserver.models;

import java.time.Instant;
import javax.persistence.*;

@Entity(name = "refreshtoken")
public class RefreshToken {

    @Id
    @Column(nullable = false)
    @SequenceGenerator(name = "refreshtoken_seq", sequenceName = "refreshtoken_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "refreshtoken_seq")
    private Long id;
    
    @OneToOne
    @JoinColumn(name = "userid", referencedColumnName = "id")
    private User user;
    
    @Column(nullable = false, unique = true)
    private String token;
    
    @Column(nullable = false)
    private Instant expiryDate;

    @JoinTable(  name = "refreshtoken_webapp",
            joinColumns = @JoinColumn(name = "refreshtokenid"),
            inverseJoinColumns = @JoinColumn(name = "webappid"))
    private EWebApp webApp = EWebApp.WA_GATE;

    public RefreshToken() {
    }

    public RefreshToken(User user, String token, Instant expiryDate, EWebApp webApp) {
        this.user = user;
        this.token = token;
        this.expiryDate = expiryDate;
        this.webApp = webApp;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Instant getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Instant expiryDate) {
        this.expiryDate = expiryDate;
    }

    public EWebApp getWebApp() {
        return webApp;
    }

    public void setWebApp(EWebApp webApp) {
        this.webApp = webApp;
    }
    //getters and setters
}
