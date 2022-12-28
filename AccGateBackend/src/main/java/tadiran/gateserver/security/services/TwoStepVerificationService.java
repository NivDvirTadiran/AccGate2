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
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tadiran.gateserver.models.EMsgType;
import tadiran.gateserver.models.PinCode;
import tadiran.gateserver.models.User;


@Service
public class TwoStepVerificationService {
    private static final Logger logger = LoggerFactory.getLogger(TwoStepVerificationService.class);

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
            httpPost.setURI(new URI("https://172.28.8.245:8443/ExternalServices/zconnector/sendEmail"));
            
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

    public boolean ValidateCode(User user, String code) {
        logger.debug("ValidateCode: request pinCode: " + code);
        PinCode pinCode = getPinCode(user);
        if (pinCode != null) {
            logger.debug("ValidateCode: memory pinCode: " + pinCode.getPinCode());
        }
        else {
            logger.debug("pincode not in memmory: pinCode == null");
            return false;
        }

        return Objects.equals(pinCode.getPinCode(), code);
    }

}
