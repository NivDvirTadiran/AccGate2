package tadiran.gateserver.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.Instant;
import java.time.temporal.ChronoUnit;





@Entity
public class PinCode {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true)
  private String pinCode;


  @OneToOne
  @JoinColumn(name = "userid", referencedColumnName = "id")
  private User user;

  @Column(nullable = false)
  private EMsgType messageType;

  Instant createTime;

  public PinCode() {

  }


  private boolean isAlreadySent = false;

  public PinCode(User user, EMsgType messageType, String pinCode) {
    this.user = user;
    this.messageType = messageType;
    this.pinCode = pinCode;
    this.createTime = Instant.now().truncatedTo(ChronoUnit.SECONDS);
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

  public String getPinCode() {
    return pinCode;
  }

  public void setPinCode(String pinCode) {
    this.pinCode = pinCode;
  }

  public boolean isAlreadySent() {
    return isAlreadySent;
  }

  public void setAlreadySent() {
    this.isAlreadySent = true;
  }

  public Instant getCreateTime() {
    return createTime;
  }

  public void setCreateTime(Instant createTime) {
    this.createTime = createTime;
  }
}
