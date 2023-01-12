package tadiran.gateserver.security.services;

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
import tadiran.gateserver.models.TempPass;
import tadiran.gateserver.models.User;
import tadiran.gateserver.payload.response.MessageResponse;
import tadiran.gateserver.payload.response.TSVValidateCodeResponse;
import tadiran.gateserver.repository.UserRepository;
import tadiran.gateserver.security.jwt.JwtUtils;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;


@Service
public class ForgotPasswordService {
    private static final Logger logger = LoggerFactory.getLogger(ForgotPasswordService.class);

    @Autowired
    JwtUtils jwtUtils;

    @Autowired
    UserRepository userRepository;

    @Value("${tadiran.gate.MailServer}")
    private String mailServer;

    List<TempPass> tempPassList = new ArrayList<>();


    static char[] SYMBOLS = "$@!%*?&#><~".toCharArray();
    static char[] LOWERCASE = "abcdefghijklmnopqrstuvwxyz".toCharArray();
    static char[] UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();
    static char[] NUMBERS = "0123456789".toCharArray();
    static char[] ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$@!%*?&#><~".toCharArray();
    static Random rand = new SecureRandom();

    private String randomizeNewCode() {
        int length = 10;
        //assert length >= 4;
        char[] password = new char[length];

        //get the requirements out of the way
        password[0] = LOWERCASE[rand.nextInt(LOWERCASE.length)];
        password[1] = UPPERCASE[rand.nextInt(UPPERCASE.length)];
        password[2] = NUMBERS[rand.nextInt(NUMBERS.length)];
        password[3] = SYMBOLS[rand.nextInt(SYMBOLS.length)];

        //populate rest of the password with random chars
        for (int i = 4; i < length; i++) {
            password[i] = ALL_CHARS[rand.nextInt(ALL_CHARS.length)];
        }

        //shuffle it up
        for (int i = 0; i < password.length; i++) {
            int randomPosition = rand.nextInt(password.length);
            char temp = password[i];
            password[i] = password[randomPosition];
            password[randomPosition] = temp;
        }

        return new String(password);
    }

    public TempPass getTempPass(User user) {
        return tempPassList.stream()
                .filter(tempPass -> user.getId().equals(tempPass.getUser().getId()))
                .findAny()
                .orElse(null);
    }


    @Scheduled(fixedRate = 150000)
    public void deleteNonActiveTempPassLists() {
        List<TempPass> found = new ArrayList<TempPass>();

        logger.debug("Start deletion of nun active pin code from list..");

        for (TempPass tempPass : tempPassList) {
            logger.debug("User:  " + tempPass.getUser().getUsername() + "   Pass: " + tempPass.getTempPass());
        }


        tempPassList.stream()
                .filter(tempPass -> Instant.now().isAfter(tempPass.getCreateTime().plus(15, ChronoUnit.MINUTES)))
                .forEach(tempPass -> {
                    logger.debug("remove tempPass: "+tempPass.getTempPass() + "     for user: " + tempPass.getUser().getUsername());
                    found.add(tempPass);
                });

        tempPassList.removeAll(found);

        for (TempPass tempPass : tempPassList) {
            logger.debug("User:  " + tempPass.getUser().getUsername() + "   Pass: " + tempPass.getTempPass());
        }

    }

    public void deleteAllTempPassOfUser(User user) {
        List<TempPass> found = new ArrayList<>();

        logger.debug("Start deletion of all temporary password linked to user: " + user.getUsername());

        for (TempPass tempPass : tempPassList) {
            logger.debug("User:  " + tempPass.getUser().getUsername() + "   Pass: " + tempPass.getTempPass());
        }


        tempPassList.stream()
                .filter(tempPass -> user.getId().equals(tempPass.getUser().getId()))
                .forEach(tempPass -> {
                    logger.debug("remove tempPass: "+tempPass.getTempPass() + "     for user: " + tempPass.getUser().getUsername());
                    found.add(tempPass);
                });

        tempPassList.removeAll(found);

        for (TempPass tempPass : tempPassList) {
            logger.debug("User:  " + tempPass.getUser().getUsername() + "   Pass: " + tempPass.getTempPass());
        }

    }

    //@Test
    public String GeneratePassForUser(User user) {
        TempPass tempPass;

        deleteAllTempPassOfUser(user);

        logger.debug("Generate new temporary password for user: "+ user.getUsername());
        String pass = this.randomizeNewCode();
        tempPass = new TempPass(user, EMsgType.Email, pass);
        tempPassList.add(tempPass);

        return tempPass.getTempPass();
    }

    //@Test
    public void sendPassByEmail(String pass, User user) {

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
            String requestBody = "{\"SendEmail\": {\"receiversList\": [\""+user.getEmail()+"\"], \"subject\": \"Tadirantele: reset password" + "\", \"body\": \"<b>Hello</b><br>Your login temporary password is: " + pass + "\"}}";

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

    public boolean ValidateTemporaryPass(String username, String pass) {
        logger.debug("ValidatePass: request tempPass: " + pass);
        User user = locateUserFromName(username);

        if (user == null) { return false; }


        TempPass tempPass = getTempPass(user);
        if (tempPass != null && Objects.equals(tempPass.getTempPass(), pass)) {
            logger.debug("ValidatePass: memory tempPass: " + tempPass.getTempPass());
            return true;
        }
        else {
            logger.debug("Temporary password not in memmory: tempPass == null");
        }

        return false;
        //return Objects.equals(tempPass.getTempPass(), code);

    }

    public boolean validateTempPassTokenUse(String username, String tempPassToken) {

        // Check the User Exist
        User user = locateUserFromName(username); if (user == null) { return false; }

        // Check the TempPass (validate temporary password actually create for the by the user in the last 15 minutes)
        TempPass tempPass = getTempPass(user); if (tempPass == null) { return false; }
        if (!tempPass.getTempPass().equals(tempPassToken)) {return false;}

        return true;
    }

}
