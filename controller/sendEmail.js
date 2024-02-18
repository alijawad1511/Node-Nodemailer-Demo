const nodemailer = require('nodemailer');

const sendEmail = async (req,res) => {

  const htmlTemplate = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
          .text {
            font-size: 22px;
          }
    
          .btn {
            text-decoration: none;
            background-color: #178ecf;
            color: white;
            padding: 12px 18px;
            border-radius: 30px;
            font-size: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h2><span style="color: rgb(0, 140, 255)">Dev</span>Buddy</h2>
        <p class="text">
          Hi Sona!<br />We're happy you signed up for DevBuddy. To start exploring
          the DevBuddy, please confirm your email address.
        </p>
        <a href="https://www.google.com" class="btn" target="_blank">Verify Now</a>
        <p class="text">Welcome to DevBuddy!<br />The DevBuddy Team</p>
      </body>
    </html>
    `

  const transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.PASSWORD
    }
  });

  // send mail with defined transport object
  const options = await transporter.sendMail({
    from: process.env.HOST_EMAIL, // sender address
    to: process.env.RECEIVER_EMAIL, // list of receivers
    subject: "Demo Email", // Subject line
    text: "This email is for testing purpose.", // plain text body
    html: htmlTemplate, // html body
  });

  transporter.sendMail(options,(error,info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Message Sent...');
      console.log(info);
      res.json(info);
    }
  })

}

module.exports = sendEmail;