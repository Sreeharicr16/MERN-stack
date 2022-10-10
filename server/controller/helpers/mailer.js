require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(email, code) {
  try {
    console.log("email: "+email)
    console.log("code: "+code)
    const smtpEndpoint = "smtp.sendgrid.net";

    const port = 465;

    const senderAddress = "sreehari.cr@upsmartsolutions.com";

    var toAddress = email;

    const smtpUsername = "apikey";

    const smtpPassword = process.env.SG_APIKEY;

    var subject = "Verify your email";

    // The body of the email for recipients
    var body_html = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`;

  
   
   

    // Create the SMTP transport.

    // let transporter = nodemailer.createTransport({
    //   host: smtpEndpoint,
    //   port: port,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: smtpUsername,
    //     pass: smtpPassword,
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: 'ted23@ethereal.email',
          pass: '7Z2SpfDFD64sjE42uC'
      }
  });

    // Specify the fields in the email.
    let mailOptions = {
      from: senderAddress,
      to: toAddress,
      subject: subject,
      html: body_html,
    };

    let info = await transporter.sendMail(mailOptions);
    return { error: false };
  } 
  
  catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

module.exports = { sendEmail };
