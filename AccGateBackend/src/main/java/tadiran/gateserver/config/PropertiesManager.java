package tadiran.gateserver.config;

import lombok.extern.log4j.Log4j2;
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
import org.springframework.stereotype.Component;
import org.springframework.util.DefaultPropertiesPersister;
import tadiran.gateserver.models.PinCode;
import tadiran.gateserver.models.Prop;

import java.io.*;
import java.util.*;

import static java.lang.System.getProperty;


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
    private final String backUpPropertiesFile = "..//webapps//accGate//WEB-INF//classes//saved-preference.properties";
    private final String defaultPropertiesFile = "..//webapps//accGate//WEB-INF//classes/application.properties";

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


  /*
    public Map<String, String> stringPropertyNames() {
        Map<String, String> h = new HashMap<>();
        for (Map.Entry<Object, Object> e : properties.entrySet()) {
            Object k = e.getKey();
            Object v = e.getValue();
            if (k instanceof String && v instanceof String) {
                h.put((String) k, (String) v);
            }
        }
        return h;
    }
*/
    public static Object getProperty(String key, Class<?> propClass) {
        return environment.getProperty(key, propClass);
    }


    public void setProperty(String key, String val) {
        properties.setProperty(key, val);
    }

    public void writeToProperties2() {
        try {
            // create and set properties into properties object
            properties = new Properties();
            properties.setProperty("Prop1", "toto");
            properties.setProperty("Prop2", "test");
            properties.setProperty("Prop3", "tata");
            // get or create the file
            File f = new File(backUpPropertiesFile);
            OutputStream out = new FileOutputStream( f );
            // write into it
            DefaultPropertiesPersister p = new DefaultPropertiesPersister();
            p.store(properties, out, "Header COmment");
        } catch (Exception e ) {
            e.printStackTrace();
        }
    }

    public void printProperties() {
        log.info("properties: " + properties.stringPropertyNames().toString());
        logger.info("properties: " + properties.stringPropertyNames().toString());
    }


    public void loadProperties() {
        FileReader reader = null;
        File file = new File(defaultPropertiesFile);

        try {
            reader = new FileReader(file);

            properties = new Properties();
            properties.load(reader);

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.setProperty("app.home", "test");
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
        File file = new File(backUpPropertiesFile);

        try {
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
