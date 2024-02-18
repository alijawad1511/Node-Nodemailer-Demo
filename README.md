### Introduction

This node app is a simple demo of sending an email using Nodemailer

### .env Info

In .env file, there are two env variables.

- HOST_EMAIL: Email of account which is being used to send emails
- PASSWORD: This is app passcode of host gmail account. You can create your own app and passcode.

### How to test

- Run your server
- Visit http://localhost:5000 and check welcome message
- Then visits http://localhost:5000/sendemail
- Above endpoint will send email to your provided email as 'RECEIVER_EMAIL' in .env from 'HOST_EMAIL' as sender
