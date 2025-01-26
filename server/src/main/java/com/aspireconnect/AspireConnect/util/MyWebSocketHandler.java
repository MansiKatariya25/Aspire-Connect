package com.aspireconnect.AspireConnect.util;

import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.web.socket.TextMessage;

public class MyWebSocketHandler extends TextWebSocketHandler {

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String clientMessage = message.getPayload();
        System.out.println("Received message: " + clientMessage);

        // Echo the message back to the client
        session.sendMessage(new TextMessage("Server response: " + clientMessage));
    }
}
