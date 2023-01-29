package tadiran.gateserver.controllers;



import java.lang.reflect.Type;
import java.security.Principal;
import java.time.LocalDate;
import java.util.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import tadiran.gateserver.config.PropertiesManager;
import tadiran.gateserver.models.*;
import tadiran.gateserver.payload.request.*;
import tadiran.gateserver.payload.response.*;
import tadiran.gateserver.repository.*;
import tadiran.gateserver.security.jwt.exception.TokenRefreshException;
import tadiran.gateserver.security.services.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import tadiran.gateserver.security.jwt.JwtUtils;
import tadiran.gateserver.models.Role;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
  private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  AgentRepository agentRepository;

  @Autowired
  SupRepository supRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @Autowired
  RefreshTokenService refreshTokenService;

  @Autowired
  UserDetailsServiceImpl userDetailsService;

  @Autowired
  TwoStepVerificationService twoStepVerificationService;

  @Autowired
  ForgotPasswordService forgotPasswordService;

  @Value("${tadiran.gate.pass-exp-days}")
  private int passExpDays;

  @Value("${tadiran.gate.PreviousAlertPassExpDays}")
  private int previousAlertPassExpDays;

  @Value("${tadiran.gate.TSV}")
  private Boolean isTwoStepVerficiiationRequire;

  PropertiesManager propertiesManager = new PropertiesManager();

  @CrossOrigin(origins = "https://localhost:4200", allowedHeaders = "Requestor-Type", exposedHeaders = "X-Get-Header")
  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
    if (!userRepository.existsByUsername(loginRequest.getUsername())) {
      logger.info("signin: user  not exist");
      if (userDetailsService.isSupCredentials(loginRequest) ||
          userDetailsService.isAgentCredentials(loginRequest)) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: A registry process should be made!"));
      }
    }

    if (forgotPasswordService.ValidateTemporaryPass(loginRequest.getUsername(), loginRequest.getPassword())) {
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("User credentials have expired"));
    }


    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    User user = userRepository.findByUsername(userDetails.getUsername())
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + userDetails.getUsername()));

    Set<Role> roles = user.getRoles();
    List<String> rolesList = new ArrayList<String>();
    roles.forEach((role) -> rolesList.add(role.getERole().name()));
    logger.info("getRolesList: " + rolesList);

      /*List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());*/


    RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId(), EWebApp.WA_GATE);
    String jwt = refreshTokenService.generateJwtToken(refreshToken);

    return ResponseEntity.ok(new JwtResponse(jwt,
                          refreshToken.getToken(),
                          user.getId(),
                          user.getUsername(),
                          user.getEmail(),
                          EWebApp.WA_GATE,
                          user.getRolesList()));
  }

  @PostMapping("/signout")
  public ResponseEntity<?> unAuthenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
    return ResponseEntity
            .badRequest()
            .body(new MessageResponse("Error: A registry process should be made!"));
  }

  //@CrossOrigin(origins = "*", maxAge = 3600)
  //@PreAuthorize("hasRole('ADMIN')")
  @PostMapping("/signupadmin")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(),
               signUpRequest.getEmail(),
               encoder.encode(signUpRequest.getPassword()));

    List<String> strRoles = signUpRequest.getRoles();
    //Role role = new Role();
    Set<Role> roles = new HashSet<Role>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByeRole(ERole.User)
          .orElseThrow(() -> new RuntimeException("Error(null): Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          /*List<String> rolesListBefore = new ArrayList<String>();
          roles.forEach((role2) -> rolesListBefore.add(role2.getName().name()));
          logger.info("getRolesList1: " + rolesListBefore);
          addAdminRole(roles);
          List<String> rolesListAfter = new ArrayList<String>();
          roles.forEach((role2) -> rolesListAfter.add(role2.getName().name()));
          logger.info("getRolesList2: " + rolesListAfter);
          if (isActionPermitted(signUpRequest.getAccessToken(), ERole.Admin)) {
            new RuntimeException("Access Denied: User unauthorized!");
          }
          */  Role adminRole = roleRepository.findByeRole(ERole.Admin)
                  .orElseThrow(() -> new RuntimeException("Error(admin): Role is not found."));

            roles.add(adminRole);

            break;
          case "mod":
            Role modRole = roleRepository.findByeRole(ERole.SupervisorMonitor)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modRole);


            break;
          case "user":
            Role userRole = roleRepository.findByeRole(ERole.User)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);

            break;
          default:
            throw new RuntimeException("Error: Role unknown: " + role);
        }
      });
    }

    //user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

  }


  public ResponseEntity<?> replacePassForm(ReplacePassFormRequest replacePassFormRequest) {
    if (!userRepository.existsByUsername(replacePassFormRequest.getUsername())) {
      if (userDetailsService.isSupCredentials(replacePassFormRequest.getUsername(), replacePassFormRequest.getPassword()) ||
              userDetailsService.isAgentCredentials(replacePassFormRequest.getUsername(), replacePassFormRequest.getPassword())) {
        return ResponseEntity
                .badRequest()
                .body(new MessageResponse("Error: A registry process should be made!"));
      }
    }
/*
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
            replacePassFormRequest.getUsername(),
            replacePassFormRequest.getOldPassword())).orElseThrow(() -> new UsernameNotFoundException("User Not Found with Agent name: "))
    */
    try {
      Authentication authentication = authenticationManager.authenticate(
              new UsernamePasswordAuthenticationToken(replacePassFormRequest.getUsername(), replacePassFormRequest.getOldPassword()));
    } catch (BadCredentialsException e) {
      if (!forgotPasswordService.ValidateTemporaryPass(replacePassFormRequest.getUsername(), replacePassFormRequest.getOldPassword())) {
        final Map<String, Object> body = new HashMap<>();
        body.put("oldPassword", HttpServletResponse.SC_UNAUTHORIZED);
        return new ResponseEntity<>(new ApiResponse(body, "VALIDATION_FAILED"), HttpStatus.BAD_REQUEST);
      }
    } catch (AuthenticationException e) {
      e.printStackTrace();
    }

    User user = userRepository.findByUsername(replacePassFormRequest.getUsername())
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + replacePassFormRequest.getUsername()));

    user.setPassword(encoder.encode(replacePassFormRequest.getPassword()));
    userRepository.save(user);

    if (!encoder.matches(user.getPassword(),replacePassFormRequest.getOldPassword())) {
      user.setPassLastModifiedOn(LocalDate.now());
      userRepository.save(user);
    }

    return ResponseEntity.ok(new MessageResponse("Password replaced successfully!"));
  }

  @PostMapping("/register-form")
  public ResponseEntity<?> registerForm(@Valid @RequestBody RegisterFormRequest registerFormRequest) {

    if (userRepository.existsByUsername(registerFormRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(registerFormRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }


    if (!userDetailsService.isSupCredentials(registerFormRequest) &&
        !userDetailsService.isAgentCredentials(registerFormRequest)) {
            return ResponseEntity
                  .badRequest()
                  .body(new MessageResponse("Error: A registry process un valid!"));
    }

    // Create new user's account
    User user = new User(registerFormRequest.getUsername(),
            registerFormRequest.getEmail(),
            encoder.encode(registerFormRequest.getPassword()));

    if (registerFormRequest.getPhone() != null) {
      user.setPhone(registerFormRequest.getPhone());
    }

    if (userDetailsService.isSupCredentials(registerFormRequest)) {
      // Link the user to the initial Supervisor registry request
      user.setSup(userDetailsService.getRequestCorrelatedSupId(registerFormRequest));
      userRepository.save(user);
    }
    else if (userDetailsService.isAgentCredentials(registerFormRequest)) {
      // Link the user to the initial Agent registry request
      user.setAgent(userDetailsService.getRequestCorrelatedAgentId(registerFormRequest));
      userRepository.save(user);
    }

    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }

  //@CrossOrigin(origins = "*", maxAge = 3600)
  //@PreAuthorize("hasRole('ADMIN')")
  @PostMapping("/signup")
  public ResponseEntity<?> registerOnlyUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(),
            signUpRequest.getEmail(),
            encoder.encode(signUpRequest.getPassword()));

    List<String> strRoles = signUpRequest.getRoles();
    //Role role = new Role();
    Set<Role> roles = new HashSet<Role>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByeRole(ERole.User)
              .orElseThrow(() -> new RuntimeException("Error(null): Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
          case "admin":
          /*List<String> rolesListBefore = new ArrayList<String>();
          roles.forEach((role2) -> rolesListBefore.add(role2.getName().name()));
          logger.info("getRolesList1: " + rolesListBefore);
          addAdminRole(roles);
          List<String> rolesListAfter = new ArrayList<String>();
          roles.forEach((role2) -> rolesListAfter.add(role2.getName().name()));
          logger.info("getRolesList2: " + rolesListAfter);
          if (isActionPermitted(signUpRequest.getAccessToken(), ERole.Admin)) {
            new RuntimeException("Access Denied: User unauthorized!");
          }
          */  Role adminRole = roleRepository.findByeRole(ERole.Admin)
                  .orElseThrow(() -> new RuntimeException("Error(admin): Role is not found."));

            roles.add(adminRole);

            break;
          case "mod":
            Role modRole = roleRepository.findByeRole(ERole.SupervisorMonitor)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(modRole);


            break;
          case "user":
            Role userRole = roleRepository.findByeRole(ERole.User)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);

            break;
          default:
            throw new RuntimeException("Error: Role unknown: " + role);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));

  }

  //@CrossOrigin(origins = "*", maxAge = 3600)
  //@PreAuthorize("hasRole('ADMIN')")
  public void addAdminRole(Set<Role> roles) {
    logger.info("eRole.name()1: ");
    Role adminRole = roleRepository.findByeRole(ERole.Admin)
          .orElseThrow(() -> new RuntimeException("Error(admin): Role is not found."));
    roles.add(adminRole);
  }

  public boolean isActionPermitted(String requestAccessToken, ERole eRole) throws RuntimeException{
    logger.info("eRole.name()1: " + eRole.name());
    logger.info("requestAccessToken: " + requestAccessToken);
    return userRepository.findByUsername(jwtUtils.getUserNameFromJwtToken(requestAccessToken))
            .map(user -> user.verifyERoleExist(eRole))
            .orElseThrow(() ->
              new NullPointerException("Access Denied: User unauthorized!"));

    //return isPermitted;
  }

  @PostMapping("/passexpdate")
  public ResponseEntity<?> passExpireDate(@Valid @RequestBody PassExpDateRequest request) {

    String requestAccessToken = request.getAccessToken();

    return userRepository.findByUsername(jwtUtils.getUserNameFromJwtToken(requestAccessToken))
            .map(User::getPassLastModifiedOn)
            .map(passDate -> {
              LocalDate expireDay = passDate.plusDays(passExpDays);
              LocalDate currentDate = LocalDate.now();
              return ResponseEntity.ok(new PassExpDateResponse(
                      currentDate.until(expireDay).getDays(),previousAlertPassExpDays)
              );})
            .orElseThrow(() -> new NullPointerException("Eror: Password expiration details un available!"));

  }

  @PostMapping("/permitwebapplist")
  public ResponseEntity<?> permittedWebAppList(@Valid @RequestBody PassExpDateRequest request) {

    String requestAccessToken = request.getAccessToken();


    WebApp realtime = new WebApp(EWebApp.WA_ACCREALTIME);
    WebApp scriptDesigner = new WebApp(EWebApp.WA_GCCS);
    WebApp agent = new WebApp(EWebApp.WA_AGENT);
    //WebApp aeonixAdmin = new WebApp(EWebApp.WA_AEONIXADMIN);
    WebApp admin = new WebApp(EWebApp.WA_ADMIN);

    return userRepository.findByUsername(jwtUtils.getUserNameFromJwtToken(requestAccessToken))
            .map(user -> {

              return ResponseEntity.ok(new PermittedWebAppListResponse(
                      user.getRoles().stream().anyMatch(role -> role.isSatisfied(realtime.getRequiredRoles())),
                      user.getRoles().stream().anyMatch(role -> role.isSatisfied(scriptDesigner.getRequiredRoles())),
                      user.getRoles().stream().anyMatch(role -> role.isSatisfied(agent.getRequiredRoles())),
                      false, /*user.getRoles().stream().anyMatch(role -> role.isSatisfied(aeonixAdmin.getRequiredRoles())),*/
                      user.getRoles().stream().anyMatch(role -> role.isSatisfied(admin.getRequiredRoles())))
              );})
            .orElseThrow(() -> new NullPointerException("Error: Can not get server data defining permitted web apps for user!"));

  }

  @PostMapping("/accountdetails")
  public ResponseEntity<?> accountDetails(@Valid @RequestBody AccountDetailsRequest request) {

    String requestAccessToken = request.getAccessToken();

    return userRepository.findByUsername(jwtUtils.getUserNameFromJwtToken(requestAccessToken))
            .map(user ->
              ResponseEntity.ok(new AccountDetailsResponse(user.getUsername(),user.getEmail(),user.getPhone())
              ))
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + jwtUtils.getUserNameFromJwtToken(requestAccessToken)));

  }

  //@GetMapping("/getconfigurationdata")
  //@PreAuthorize("hasRole('Admin') or hasRole('SupervisorAdmin')")
  @RequestMapping(value = "/getconfigurationdata", method = RequestMethod.GET)
  public ResponseEntity<?> getConfigurationData() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
    String currentPrincipalName = userDetails.getUsername();
    if (userRepository.findByUsername(currentPrincipalName)
            .map(user -> (user.verifyERoleExist(ERole.Admin) || user.verifyERoleExist(ERole.SupervisorAdmin)))
            .orElse(false)) {ResponseEntity.status(HttpStatus.FORBIDDEN);}

    this.propertiesManager.writeToProperties2();
    this.propertiesManager.loadProperties();
    this.propertiesManager.saveProperties();
    List<Prop> prop = this.propertiesManager.stringPropertyNames();

    logger.info("getConfigurationData - username: "+currentPrincipalName);

    return userRepository.findByUsername(currentPrincipalName)
            .map(user -> new ResponseEntity<>(new GetConfigurationDataResponse(prop), HttpStatus.OK))
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + currentPrincipalName));


//ResponseEntity.ok(new GetConfigurationDataResponse(prop,passExpDays,user.getPhone()))

  }

  //@PreAuthorize("hasRole('Admin') or hasRole('SupervisorAdmin')")
  @PostMapping("/setconfigurationdata")
  public ResponseEntity<?> setConfigurationData(@Valid @RequestBody SetConfigurationDataRequest request) {



                    Gson g = new Gson();
    Type collectionType = new TypeToken<Collection<Prop>>(){}.getType();
    Collection<Prop> collectionProp = g.fromJson(request.getProp(), collectionType);


    List<Prop> propList = new ArrayList<>();
    for (Prop p  : collectionProp) {
      propList.add(new Prop((String) p.getPropName(),(String) p.getPropValue()));
    }

    if (this.propertiesManager.saveProperties(propList))
      return ResponseEntity.ok(new MessageResponse("Properties Saved"));
    else
      return ResponseEntity.badRequest().body(new MessageResponse("Error: Unable to save your changes"));

  }


  @PostMapping("/refreshtoken")
  public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request ) {

    //logger.info("/refreshtoken requested by url source: ", authException.getMessage());
    String requestRefreshToken = request.getRefreshToken();
    String requestAccessToken = request.getAccessToken();
    //EWebApp webAppCurrent = jwtUtils.getWebAppFromJwtToken(requestAccessToken);
    return refreshTokenService.findByToken(requestRefreshToken)
            .map(refreshTokenService::verifyExpiration)
            .map(RefreshToken::getId)
            /*.map(refreshTokenService::refreshRefreshToken)
            .map(newRefreshToken -> {
              newRefreshToken = refreshTokenService.setWebApp(newRefreshToken);
              String token = refreshTokenService.generateJwtToken(newRefreshToken);
              return ResponseEntity.ok(new TokenRefreshResponse(token, newRefreshToken.getToken()));
            })*/

            .map(tokenId -> {
              //String token = jwtUtils.generateToken(tokenId );
              RefreshToken newRefreshToken = (refreshTokenService.refreshRefreshToken(tokenId));
              newRefreshToken = refreshTokenService.setWebApp(newRefreshToken, EWebApp.WA_GATE /*webAppCurrent*/);
              String token = refreshTokenService.generateJwtToken(newRefreshToken);
              return ResponseEntity.ok(new TokenRefreshResponse(token, newRefreshToken.getToken()));
            })
            .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                    "Refresh token is not in database!"));
  }

  @PostMapping("/webapptab")
  public ResponseEntity<?> authenticateWebAppTab(@Valid @RequestBody WebAppTabRequest request ) {

    String requestRefreshToken = request.getRefreshToken();
    EWebApp webApp = request.getWebApp();
    Set<Role> user_roles = refreshTokenService.findByToken(requestRefreshToken)
            .map(RefreshToken::getUser)
            .map(User::getRoles).get();

    /*boolean relvantRole = user_roles.stream().filter(role -> role.isSatisfied(request.getRequiredRoles()))
            .findAny().isPresent();*/



    return refreshTokenService.findByToken(requestRefreshToken)
            .map(refreshTokenService::verifyExpiration)
            .map(RefreshToken::getUser)
            //.filter(user -> user.getRoles().stream().anyMatch(role -> role.isSatisfied(request.getRequiredRoles())))
            .map(user -> {
              boolean isPermitted = user.getRoles().stream().anyMatch(role -> role.isSatisfied(request.getRequiredRoles()));
              RefreshToken newRefreshToken = refreshTokenService.createRefreshToken(user.getId(), EWebApp.WA_GATE);
              String newAccessToken = refreshTokenService.generateJwtToken(newRefreshToken);
              logger.info("authenticateWebAppTab - request.getRequiredRoles():  " + request.getRequiredRoles().toString());
              logger.info("authenticateWebAppTab - user.getRoles().stream():  " + user.getRoles().stream().toString());
              logger.info("authenticateWebAppTab - isPermitted:  " + isPermitted);


              if (!isPermitted) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error: The Requested is not permitted for current user"));
              }

              return ResponseEntity.ok(new JwtResponse(newAccessToken,
                      newRefreshToken.getToken(),
                      user.getId(),
                      user.getUsername(),
                      user.getEmail(),
                      webApp,
                      user.getRolesList()));




            })
            .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                    "Refresh token is not in database!"));

  }


  @PostMapping("/tsv_codevalidatebyname")
  public ResponseEntity<?> TwoStepVerification_ValidateCode(@Valid @RequestBody  TSVValidateCodeRequest validateCodeRequest ) {

    return twoStepVerificationService.ValidateCode(validateCodeRequest.getUsername(),
                                                   validateCodeRequest.getCode());

  }

  @PostMapping("/replace-pass-form")
  public ResponseEntity<?> NoneTSV_replacePassForm(@Valid @RequestBody  TSVReplacePassFormRequest replacePassFormRequest) {

    logger.info("isTwoStepVerficiiationRequire= " + this.isTwoStepVerficiiationRequire);

    if (!this.isTwoStepVerficiiationRequire) {

      return this.replacePassForm(
              new ReplacePassFormRequest(
                      replacePassFormRequest.getUsername(),
                      replacePassFormRequest.getOldPassword(),
                      replacePassFormRequest.getPassword(),
                      replacePassFormRequest.getConfirmPassword()
              )
      );

    }
    return ResponseEntity.badRequest().body(new MessageResponse("Error: Two Step Verifiication is required!"));
  }

  @PostMapping("/tsv_replace-pass-form")
  public ResponseEntity<?> TwoStepVerification_replacePassForm(@Valid @RequestBody  TSVReplacePassFormRequest replacePassFormRequest) {

    logger.info("isTwoStepVerficiiationRequire= " + this.isTwoStepVerficiiationRequire);

    if  (forgotPasswordService.ValidateTemporaryPass(replacePassFormRequest.getUsername(),
                                replacePassFormRequest.getOldPassword()) ||
         twoStepVerificationService.validatePinCodeTokenUse(replacePassFormRequest.getUsername(),
                                replacePassFormRequest.getPinCodeToken())) {


                    return this.replacePassForm(
                            new ReplacePassFormRequest(
                                   replacePassFormRequest.getUsername(),
                                   replacePassFormRequest.getOldPassword(),
                                   replacePassFormRequest.getPassword(),
                                   replacePassFormRequest.getConfirmPassword()
                            )
                    );

    }

    return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalidate Pin-Code! User Not Approved"));
  }

  @PostMapping("/tsv_codegeneratebyname")
  public ResponseEntity<?> TwoStepVerification_GenerateCodeByUsername(@Valid @RequestBody TSVGenerateCodeRequest generateCodeRequest ) {
    String code;
    User user;

    logger.debug("get request tsv_codegeneratebyname");

    if (userRepository.existsByUsername(generateCodeRequest.getUsername())) {
      logger.info("Generate code for user: " + generateCodeRequest.getUsername());
      user = userRepository.findByUsername(generateCodeRequest.getUsername()).get();
      code = twoStepVerificationService.GenerateCodeForUser(user);
    }
    else {
      logger.debug("Can't find user: " + generateCodeRequest.getUsername());
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Your pin code was unable to send! Unknown User Account"));
    }


    if (code != null) {
      twoStepVerificationService.sendCodeByEmail(code, user);
    }

    return ResponseEntity.ok(new MessageResponse("Code successfully sent to user!"));
  }

  @PostMapping("/forgotpassword") //send password to mail
  public ResponseEntity<?> forgotPassword(@Valid @RequestBody TSVGenerateCodeRequest generateCodeRequest ) {
    String pass;
    User user;

    logger.debug("get request forgotpassword");

    if (userRepository.existsByUsername(generateCodeRequest.getUsername())) {
      logger.info("Generate pass for user: " + generateCodeRequest.getUsername());
      user = userRepository.findByUsername(generateCodeRequest.getUsername()).get();
      pass = forgotPasswordService.GeneratePassForUser(user);
    }
    else {
      logger.debug("Can't find user: " + generateCodeRequest.getUsername());
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Unknown User Account"));
    }


    if (pass != null) {
      forgotPasswordService.sendPassByEmail(pass, user);
    }

    return ResponseEntity.ok(new MessageResponse("Password successfully sent to email!"));
  }

  @PostMapping("/tsv_codegeneratebyemail")
  public ResponseEntity<?> TwoStepVerification_GenerateCodeByEmail(@Valid @RequestBody TSVGenerateCodeRequest generateCodeRequest ) {
    String code = null;
    User user = null;

    logger.info("get request tsv_codegeneratebyemail");

    if (userRepository.existsByEmail(generateCodeRequest.getEmail())) {
      logger.info("request code for user: " + generateCodeRequest.getEmail());
      user = userRepository.findByEmail(generateCodeRequest.getEmail()).get();
      code = twoStepVerificationService.GenerateCodeForUser(user);
    }
    else {
      logger.info("Can't find email: " + generateCodeRequest.getEmail());
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Your pin code was unable to send! Unknown User Account"));
    }


    twoStepVerificationService.sendCodeByEmail(code, user);

    return ResponseEntity.ok(new MessageResponse("Code successfully sent to user!"));
  }


}
