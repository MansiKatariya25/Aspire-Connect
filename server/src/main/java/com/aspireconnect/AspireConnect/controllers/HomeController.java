package com.aspireconnect.AspireConnect.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String getMethodName(@RequestParam(required = false) String param) {
        return ("<h1 style='text-align:center;'>This is the V1 api of Aspire Connect</h1>");
    }
}
