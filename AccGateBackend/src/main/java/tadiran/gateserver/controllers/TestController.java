package tadiran.gateserver.controllers;

import net.minidev.json.JSONValue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tadiran.gateserver.payload.response.ApiResponse;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/test")
public class TestController {
  @Value("${tadiran.gate.accVersion}")
  private String accVersion;

  @Value("${tadiran.gate.TSV}")
  private java.lang.Boolean TSV;

  @GetMapping("/all")
  public String allAccess() {
    return "Aeonix | Tadiran Telecom";
  }

  @GetMapping("/accversion")
  public String accVersion() {
    return accVersion;
  }

  @GetMapping("/istsvon")
  public ResponseEntity<?> isTSVRequired() {
    return new ResponseEntity<>(new ApiResponse(TSV, "Two Step Verification is " + (TSV ? "On" : "Off")), HttpStatus.OK);
  }

  @GetMapping("/accountdetails")
  @PreAuthorize("hasRole('User') or hasRole('SupervisorMonitor') or hasRole('Admin') or hasRole('SupervisorAdmin')")
  public String accountDetails() {
    return "User Content.";
  }


  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/mod")
  @PreAuthorize("hasRole('MODERATOR')")
  public String moderatorAccess() {
    return "Moderator Board.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}
