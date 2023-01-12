package tadiran.gateserver.models;

import javax.persistence.*;
import java.time.Instant;
import java.time.temporal.ChronoUnit;


@Entity
public class TempPass {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true)
  private String tempPass;


  @OneToOne
  @JoinColumn(name = "userid", referencedColumnName = "id")
  private User user;

  @Column(nullable = false)
  private EMsgType messageType;

  Instant createTime;

  public TempPass() {

  }


  private boolean isAlreadySent = false;

  public TempPass(User user, EMsgType messageType, String tempPass) {
    this.user = user;
    this.messageType = messageType;
    this.tempPass = tempPass;
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

  public String getTempPass() {
    return tempPass;
  }

  public void setTempPass(String tempPass) {
    this.tempPass = tempPass;
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
