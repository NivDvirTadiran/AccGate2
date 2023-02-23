package tadiran.gateserver.security.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import tadiran.gateserver.config.PropertiesManager;
import tadiran.gateserver.models.Agent;
import tadiran.gateserver.models.LoginAttempt;
import tadiran.gateserver.models.Sup;
import tadiran.gateserver.models.User;
import tadiran.gateserver.payload.request.LoginRequest;
import tadiran.gateserver.payload.request.RegisterFormRequest;
import tadiran.gateserver.repository.AgentRepository;
import tadiran.gateserver.repository.SupRepository;
import tadiran.gateserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
  private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);

  @Autowired
  UserRepository userRepository;

  @Autowired
  AgentRepository agentRepository;

  @Autowired
  SupRepository supRepository;

  @Autowired
  private HttpServletRequest request;

  private final List<LoginAttempt> tempLoginAttemptList = new ArrayList<>();

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

    return UserDetailsImpl.build(user);
  }

  public boolean isAgentCredentials(LoginRequest loginRequest) throws UsernameNotFoundException {
    return isAgentCredentials(loginRequest.getUsername(), loginRequest.getPassword());
  }

  public boolean isAgentCredentials(RegisterFormRequest registerFormRequest) throws UsernameNotFoundException {
    return isAgentCredentials(registerFormRequest.getUsername(), registerFormRequest.getPassword());
  }

  public boolean isAgentCredentials(String username, String password) throws UsernameNotFoundException {
    if (agentRepository.findByaName(username).isPresent()) {
      Agent agent = agentRepository.findByaName(username).get();
      assert agent.getAPassword() != null : "Agent "+username+" password not exist!";
      return agent.getAPassword().equals(password);
    }
    return false;
  }

  public boolean isSupCredentials(LoginRequest loginRequest) throws UsernameNotFoundException {
    return isSupCredentials(loginRequest.getUsername(), loginRequest.getPassword());
  }

  public boolean isSupCredentials(RegisterFormRequest registerFormRequest) throws UsernameNotFoundException {
    return isSupCredentials(registerFormRequest.getUsername(), registerFormRequest.getPassword());
  }

  public boolean isSupCredentials(String username, String password) throws UsernameNotFoundException {
    if (supRepository.findBySupName(username).isPresent()) {
      Sup sup = supRepository.findBySupName(username).get();
      assert sup.getSupPassword() != null : "Supervisor "+username+" password not exist!";
      return sup.getSupPassword().equals(password);
    }
    return false;
  }

  public Sup getRequestCorrelatedSupId(RegisterFormRequest registerFormRequest) throws UsernameNotFoundException {
    return getRequestCorrelatedSupId(registerFormRequest.getUsername(), registerFormRequest.getPassword());
  }

  public Sup getRequestCorrelatedSupId(String username, String password) throws UsernameNotFoundException {
    if (isSupCredentials(username, password)) {
      assert supRepository.findBySupName(username).isPresent() : "Supervisor " + username + " Object cant be load!";
      return supRepository.findBySupName(username).get();
    }
    return null;
  }

  public Agent getRequestCorrelatedAgentId(RegisterFormRequest registerFormRequest) throws UsernameNotFoundException {
    return getRequestCorrelatedAgentId(registerFormRequest.getUsername(), registerFormRequest.getPassword());
  }

  public Agent getRequestCorrelatedAgentId(String username, String password) throws UsernameNotFoundException {
    if (isAgentCredentials(username, password)) {
      assert agentRepository.findByaName(username).isPresent() : "Agent " + username + " Object cant be load!";
      return agentRepository.findByaName(username).get();
    }
    return null;
  }


  @Scheduled(fixedDelay = 13, timeUnit = TimeUnit.MINUTES)
  public void deleteNonActiveTempPassLists() {

    List<LoginAttempt> found = new ArrayList<>();
    LocalDateTime currentTime = LocalDateTime.now();
    Integer lockDuration = ((Integer) PropertiesManager.getProperty("tadiran.gate.lock-time-duration", Integer.class));

    logger.debug("Start deletion of nun active login attempts log record from list..");

    tempLoginAttemptList.stream()
            .filter(loginAttempt -> currentTime.isAfter(loginAttempt.getCreateTime().plusMinutes(lockDuration)))
            .forEach(found::add);

    tempLoginAttemptList.removeAll(found);

  }

  public void updateFailedLoginAttempts(UserDetailsImpl userDetailsImpl) {
    if (userRepository.findByUsername(userDetailsImpl.getUsername()).isPresent()) {
      User user = userRepository.findByUsername(userDetailsImpl.getUsername()).get();

      if (user.isAccountNonLocked() ) {
        if (user.getFailedAttempt() < ((Integer) PropertiesManager.getProperty("tadiran.gate.max-failed-attempts", Integer.class)) - 1) {
          this.increaseFailedAttempts(user);
        } else this.lock(user);
      }
    }
  }

  public void increaseFailedAttempts(User user) {
    user.setFailedAttempt(user.getFailedAttempt() + 1);
    userRepository.save(user);
    //userRepository.updateFailedAttempts(newFailAttempts, user.getUsername());
  }

  public void resetFailedAttempts(UserDetailsImpl userDetailsImpl) {
    if (userRepository.findByUsername(userDetailsImpl.getUsername()).isPresent()) {
      User user = userRepository.findByUsername(userDetailsImpl.getUsername()).get();

      user.setFailedAttempt(0);
      userRepository.save(user);
    }

    //userRepository.updateFailedAttempts(0, userDetailsImpl.getUsername());
  }


  public void lock(User user) {
    user.setAccountNonLocked(false);
    user.setLockTime(LocalDateTime.now());

    userRepository.save(user);
  }

  public void userSuccessLoginAttempt(UserDetailsImpl userDetailsImpl) {
    resetFailedAttempts(userDetailsImpl);
  }

  public void userFailedLoginAttempt(UserDetailsImpl userDetailsImpl) {
    if (userRepository.findByUsername(userDetailsImpl.getUsername()).isPresent()) {
      User user = userRepository.findByUsername(userDetailsImpl.getUsername()).get();
    }
    updateFailedLoginAttempts(userDetailsImpl);
  }

  public void unknownUserFailedLoginAttempt(String username) {
    String ipAddress = getClientIP();
    LoginAttempt loginAttempt = new LoginAttempt();

    loginAttempt.setIpAddress(ipAddress);
    loginAttempt.setUsername(username);

    tempLoginAttemptList.add(loginAttempt);
  }

  public void subUserLoginAttempt(String username) {
    deleteAllLoginAttemptRecordOfSubUser(username);
  }

  public boolean isUsernameBlocked(String username) {
    boolean ret;

    try {
      ret = tempLoginAttemptList.stream()
              .filter(loginAttempt -> username.equals(loginAttempt.getUsername())).count() >=
              ((Integer) PropertiesManager.getProperty("tadiran.gate.max-failed-attempts", Integer.class));
      if (ret) {logger.info("username [" + username +"] is BLOCKED!");}
    } catch (Exception e) {
      return false;
    }
    return ret;
  }

  public void deleteAllLoginAttemptRecordOfSubUser(String username) {
    List<LoginAttempt> found = new ArrayList<>();

    logger.debug("Start deletion of all temporary login attempt record of user named: " + username);

    tempLoginAttemptList.stream()
            .filter(loginAttempt -> username.equals(loginAttempt.getUsername()))
            .forEach(found::add);

    tempLoginAttemptList.removeAll(found);

  }

  private String getClientIP() {
    final String xfHeader = request.getHeader("X-Forwarded-For");
    if (xfHeader != null) {
      return xfHeader.split(",")[0];
    }
    return request.getRemoteAddr();
  }

}
