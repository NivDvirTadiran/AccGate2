package tadiran.gateserver.config;

import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.DefaultPropertiesPersister;
import tadiran.gateserver.models.PinCode;
import tadiran.gateserver.models.Prop;

import java.io.*;
import java.nio.file.Files;
import java.util.*;

import static java.lang.System.getProperty;
import static org.junit.jupiter.api.Assertions.assertEquals;


@Log4j2
@Configuration
@PropertySources({
        @PropertySource("classpath:application.properties"),
        @PropertySource(value="classpath:saved-preference.properties", ignoreResourceNotFound=true)
})
public class PropertiesManager {
    private static final Logger logger = LoggerFactory.getLogger(PropertiesManager.class);

    @Autowired
    Environment env;

    private static Environment environment;
    private Properties properties;


    private final String backUpPropertiesFile = "saved-preference.properties";


    private final String defaultPropertiesFile = "application.properties";

    public PropertiesManager() {
        properties = new Properties();
    }
/*
    public JSONObject getAllProperties()  {
        JSONObject jsonProps = new JSONObject(properties);
        return jsonProps;
    }
*/

    List<Prop> propList = new ArrayList<>();

    public List<Prop> stringPropertyNames() {
        List<Prop> propList = new ArrayList<>();
        for (Map.Entry<Object, Object> p  : properties.entrySet()) {
            propList.add(new Prop((String) p.getKey(),(String) p.getValue()));
        }
        return propList;
    }


    public static Object getProperty(String key, Class<?> propClass) {
        return environment.getProperty(key, propClass);
    }


    public void setProperty(String key, String val) {
        properties.setProperty(key, val);
    }


    @Test
    public void whenResourceAsFile_thenReadSuccessful()
            throws IOException {

        File resource = new ClassPathResource(
                "application.properties").getFile();
        String employees = new String(
                Files.readAllLines(resource.toPath()).get(0));
        assertEquals(
                "tadiran.gate.ACCServerAddress1= %ACC_IP1%",
                employees);
    }


    public void printProperties() {
        log.info("properties: " + properties.stringPropertyNames().toString());
        logger.info("properties: " + properties.stringPropertyNames().toString());
    }

    @Test
    public void loadProperties() {
        FileReader reader = null;

        try {
            File file = new ClassPathResource(defaultPropertiesFile).getFile();
            reader = new FileReader(file);

            properties = new Properties();
            properties.load(reader);

        } catch (IOException e) {
            e.printStackTrace();
        }

        printProperties();

        assertEquals(
                properties.stringPropertyNames().toArray()[0],
                "tadiran.gate.pin-code-length");
        //System.setProperty("app.home", "test");
    }

    public boolean saveProperties(List<Prop>  prop) {
        for (Prop p : prop) {
            try {
                properties.setProperty(p.getPropName(), p.getPropValue());
            }catch(Exception e) {
                e.printStackTrace();
            }
        }

        return saveProperties();
    }

    public boolean saveProperties() {
        FileWriter writer = null;


        try {
            File file = new ClassPathResource(backUpPropertiesFile).getFile();
            writer = new FileWriter(file);
            properties.store(writer, "write a file");

        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        return true;
    }

    public void writeToProperties() {
        FileReader reader = null;
        FileWriter writer = null;

        File file = new File("application.properties");

        try {
            reader = new FileReader(file);
            writer = new FileWriter(file);

            properties = new Properties();
            properties.load(reader);

            properties.setProperty("hostname", "dev.com");
            properties.store(writer, "write a file");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Bean
    static ApplicationRunner applicationRunner (Environment environment,
                                         @Value("${greetings-message:Default Hello }") String defaultValue) {
        PropertiesManager.environment = environment;

        return args -> {
            log.info("message from application.properties" + environment.getProperty("message-from-application-properties"));
            log.info("default value from application.propertties " + defaultValue);
        };
    }
}
