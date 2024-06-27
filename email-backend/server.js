const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());
app.use(cors()); // Permettre les requêtes CORS de votre frontend Angular

// Route pour l'envoi des e-mails
app.post("/send-email", (req, res) => {
  const { senderEmail, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yash.mohamed976@gmail.com",
      pass: "uncj geno kbdl oqya",
    },
  });

  const mailOptions = {
    from: "yash.mohamed976@gmail.com",
    to: "yash.mohamed976@gmail.com",
    subject: subject,
    text: "From : " + senderEmail + "\n\n" + message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error); // Log d'erreur détaillé
      res.status(500).json({
        success: false,
        message: "Erreur lors de l'envoi de l'e-mail",
        error: error.message,
      });
    } else {
      console.log("Email envoyé: " + info.response);
      res.status(200).json({
        success: true,
        message: "E-mail envoyé avec succès",
        response: info.response,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
