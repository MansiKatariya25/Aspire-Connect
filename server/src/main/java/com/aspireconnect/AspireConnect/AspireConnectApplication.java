package com.aspireconnect.AspireConnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class AspireConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(AspireConnectApplication.class, args);
	}

}
