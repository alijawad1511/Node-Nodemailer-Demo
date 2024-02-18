const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 5000;
const sendEmail = require('./controller/sendEmail');

app.get("/",(req,res) => {
    res.status(200).json({ status: true,message: "Welcome to SMTP..." });
})

app.get("/sendemail",sendEmail);

app.get("verifyEmail",(req,res) => {
    res.json({ status: true,message: "Email Verified Successfully" });
})

app.listen(PORT,() => console.log(`Server listening at Port ${PORT}`));