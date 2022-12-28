package tadiran.gateserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.sql.DataSource;


@SpringBootApplication //(exclude={DataSourceAutoConfiguration.class})
@EnableScheduling
public class GateApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(GateApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(GateApplication.class, args);
	}

	//@ConfigurationProperties{spring.datasource.url= "jdbc:mysql:172.28.8.245:3308/ecc?useSSL=false"}
	@Configuration
	public class WebConfiguration implements WebMvcConfigurer {
		@Override
		public void addViewControllers(ViewControllerRegistry registry) {
			registry.addViewController("/").setViewName("forward:/index.html");
		}

	}
/*
	@Configuration
	@EnableCaching
	public class SpringCachingConfig {

		@Bean
		public CacheManager cacheManager() {
			return new ConcurrentMapCacheManager("pincodes");
		}
	}

	@Configuration
	public class DatasourceConfig {
		@Bean
		public DataSource datasource() {
			return DataSourceBuilder.create()
					.driverClassName("com.mysql.cj.jdbc.Driver")
					.url("jdbc:mysql://localhost:3308/ecc?useSSL=false")
					.username("ecc")
					.password("!A_C_C-c0d8")
					.build();
		}
	}*/
}


