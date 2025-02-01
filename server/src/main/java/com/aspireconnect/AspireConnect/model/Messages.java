package com.aspireconnect.AspireConnect.model;

import java.util.Date;

public class Messages {
    private String sender;
    private String receiver;
    private String content; // ✅ Store message content
    private Date timestamp; // ✅ Store timestamp of the message

    public Messages(String sender, String receiver, String content, Date timestamp) {
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
        this.timestamp = timestamp;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }
}
