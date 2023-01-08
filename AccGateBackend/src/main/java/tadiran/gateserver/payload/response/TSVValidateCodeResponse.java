package tadiran.gateserver.payload.response;

import tadiran.gateserver.models.EWebApp;

import java.util.List;

public class TSVValidateCodeResponse {
  private String pinCodeToken;
  private String type = "Bearer";
  private Long id;
  private String username;
  private String email;
  private String code;

  public TSVValidateCodeResponse(String pinCodeToken, String username, Long id, String email, String code) {
    this.pinCodeToken = pinCodeToken;
    this.username = username;
    this.id = id;
    this.email = email;
    this.code = code;
  }

  public String getPinCodeToken() {
    return pinCodeToken;
  }

  public void setPinCodeToken(String pinCodeToken) {
    this.pinCodeToken = pinCodeToken;
  }

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

  public String code() {
    return code;
  }

  public void setWebApp(String code) {
    this.code = code;
  }

}
