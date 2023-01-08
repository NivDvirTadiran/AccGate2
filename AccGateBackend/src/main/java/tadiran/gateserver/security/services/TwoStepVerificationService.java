package tadiran.gateserver.security.services;


import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;


import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustAllStrategy;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tadiran.gateserver.models.EMsgType;
import tadiran.gateserver.models.PinCode;
import tadiran.gateserver.models.User;
import tadiran.gateserver.payload.response.MessageResponse;
import tadiran.gateserver.payload.response.TSVValidateCodeResponse;
import tadiran.gateserver.repository.UserRepository;
import tadiran.gateserver.security.jwt.JwtUtils;


@Service
public class TwoStepVerificationService {
    private static final Logger logger = LoggerFactory.getLogger(TwoStepVerificationService.class);

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserRepository userRepository;

    @Value("${tadiran.gate.MailServer}")
    private String mailServer;

    List<PinCode> pinCodeList = new ArrayList<>();

    Random rand = new Random(); //instance of random class

    private String randomizeNewCode() {
        // It will generate 4 digit random Number.
        // from 0 to 9999
        int number = rand.nextInt(9999);

        // this will convert any number sequence into 6 character.
        return String.format("%04d", number);
    }

    public PinCode getPinCode(User user) {
        return pinCodeList.stream()
                .filter(pinCode -> user.getId().equals(pinCode.getUser().getId()))
                .findAny()
                .orElse(null);
    }


    @Scheduled(fixedRate = 150000)
    public void deleteNonActivePinCodeLists() {
        List<PinCode> found = new ArrayList<PinCode>();

        logger.debug("Start deletion of nun active pin code from list..");

        for (PinCode pinCode : pinCodeList) {
            logger.debug("User:  " + pinCode.getUser().getUsername() + "   Code: " + pinCode.getPinCode());
        }


        pinCodeList.stream()
                .filter(pinCode -> Instant.now().isAfter(pinCode.getCreateTime().plus(15, ChronoUnit.MINUTES)))
                .forEach(pinCode -> {
                    logger.debug("remove pinCode: "+pinCode.getPinCode() + "     for user: " + pinCode.getUser().getUsername());
                    found.add(pinCode);
                });

        pinCodeList.removeAll(found);

        for (PinCode pinCode : pinCodeList) {
            logger.debug("User:  " + pinCode.getUser().getUsername() + "   Code: " + pinCode.getPinCode());
        }

    }

    public void deleteAllPinCodeOfUser(User user) {
        List<PinCode> found = new ArrayList<>();

        logger.debug("Start deletion of all pin code linked to user: " + user.getUsername());

        for (PinCode pinCode : pinCodeList) {
            logger.debug("User:  " + pinCode.getUser().getUsername() + "   Code: " + pinCode.getPinCode());
        }


        pinCodeList.stream()
                .filter(pinCode -> user.getId().equals(pinCode.getUser().getId()))
                .forEach(pinCode -> {
                    logger.debug("remove pinCode: "+pinCode.getPinCode() + "     for user: " + pinCode.getUser().getUsername());
                    found.add(pinCode);
                });

        pinCodeList.removeAll(found);

        for (PinCode pinCode : pinCodeList) {
            logger.debug("User:  " + pinCode.getUser().getUsername() + "   Code: " + pinCode.getPinCode());
        }

    }

    //@Test
    public String GenerateCodeForUser(User user) {
        PinCode pinCode;

        deleteAllPinCodeOfUser(user);

        logger.debug("Generate new pin code for user: "+ user.getUsername());
        String code = String.valueOf(this.randomizeNewCode());
        pinCode = new PinCode(user, EMsgType.Email, code);
        pinCodeList.add(pinCode);

        return pinCode.getPinCode();
    }

    //@Test
    public void sendCodeByEmail(String code, User user) {

        try {
            // create http client object
            HttpClient httpClient = HttpClients
                    .custom()
                    .setSSLContext(new SSLContextBuilder().loadTrustMaterial(null, TrustAllStrategy.INSTANCE).build())
                    .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
                    .build();
            
            // create http POST request
            HttpPost httpPost = new HttpPost();
            
            // set request URI ro thr created request object
            httpPost.setURI(new URI("https://"+this.mailServer+":8443/ExternalServices/zconnector/sendEmail"));
            
            httpPost.setHeader("Authorization", "Basic QUNDVVNFUjojYlR3akducW5HTEtUazlH");
            httpPost.setHeader("Content-Type", "application/json");

            Arrays.stream(httpPost.getAllHeaders()).forEach(h -> {logger.debug("get request TwoStepVerificationService header:" + h.getName() +" " + h.getValue());} );

            // construct JSON body
            String requestBody = "{\"SendEmail\": {\"receiversList\": [\""+user.getEmail()+"\"], \"subject\": \"Tadirantele: " + code + "\", \"body\": \"<b>Hello</b><br>Your login verification code is: " + code + "\"}}";

            // convert request body into string entity
            StringEntity stringEntity = new StringEntity(requestBody);
            
            // set stringEntity to the created post request
            httpPost.setEntity(stringEntity);
            
            // execute created httpPost request
            HttpResponse httpResponse = httpClient.execute(httpPost);

        } catch (URISyntaxException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyStoreException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }

    }

    private User locateUserFromName(String username) {
        if (userRepository.existsByUsername(username)) {
            logger.info("Validate code for user: " + username);
            return userRepository.findByUsername(username).get();
        }
        else {
            logger.info("Can't find name: " + username);
            return null;
        }
    }

    public ResponseEntity<?> ValidateCode(String username, String code) {
        logger.debug("ValidateCode: request pinCode: " + code);
        User user = locateUserFromName(username);

        if (user == null) { return ResponseEntity.badRequest()
                    .body(new MessageResponse("Error: Your pin code was unable to verified! Unknown User Account"));
        }


        PinCode pinCode = getPinCode(user);
        if (pinCode != null && Objects.equals(pinCode.getPinCode(), code)) {
            logger.debug("ValidateCode: memory pinCode: " + pinCode.getPinCode());
            return ResponseEntity.ok(new TSVValidateCodeResponse(
                                             this.generatePinCodeToken(user,code),
                                             user.getUsername(),
                                             user.getId(),
                                             user.getEmail(),
                                             code));
        }
        else {
            logger.debug("pincode not in memmory: pinCode == null");
        }

        return ResponseEntity.badRequest().body(new MessageResponse("Error: Invalidate Pin-Code! User Not Approved"));
        //return Objects.equals(pinCode.getPinCode(), code);

    }

    public boolean validatePinCodeTokenUse(String username, String pinCodeToken) {

        // Check the Token
        if (!jwtUtils.validateJwtToken(pinCodeToken)) {return false;}

        // Check the User
        if (!username.equals(jwtUtils.getUsernameFromPinCodeToken(pinCodeToken))) {return false;}
        User user = locateUserFromName(username); if (user == null) { return false; }

        // Check the PinCode (validate 2SV actually made by the user in the last 15 minutes)
        PinCode pinCode = getPinCode(user); if (pinCode == null) { return false; }
        if (!pinCode.getPinCode().equals(jwtUtils.getCodeFromPinCodeToken(pinCodeToken))) {return false;}

        return true;
    }

    public String generatePinCodeToken(User user, String code) {
        return jwtUtils.generatePinCodeToken(user, code);
    }
}
