package com.aspireconnect.AspireConnect.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
            "cloud_name", "dyu980c9k",  // ✅ Replace with your Cloudinary cloud name
            "api_key", "137151495385355",  // ✅ Replace with your API key
            "api_secret", "je6qbA3UWKBTHn_t_5g_iixS24Q"  // ✅ Replace with your API secret
        ));
    }
}
