const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./firebaseServiceAccount.json");
const cors = require("cors");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mail-site-cv.firebaseio.com",
});

const db = admin.firestore();

const app = express();
const port = 3000;

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());
app.use(cors()); // Permettre les requêtes CORS de votre frontend Angular

// Route pour l'envoi des e-mails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

    // Stocker les données dans Firestore
    try {
        await db.collection('contacts').add({
            name,
            email,
            message,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) {
        return res.status(500).send({ error: 'Erreur lors de l\'enregistrement des données.' });
    }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yash.mohamed976@gmail.com",
      pass: "uncj geno kbdl oqya",
    },
  });

  const mailOptions = {
    from: 'votreEmail@gmail.com',
    to: 'yash.mohamed976@gmail.com',
    subject: `Nouveau message de ${name}`,
    text: `Vous avez reçu un nouveau message de ${name} (${email}):\n\n${message}`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
        res.status(500).send({ error: 'Erreur lors de l\'envoi de l\'e-mail.' });
    } else {
        console.log('E-mail envoyé: ' + info.response);
        res.status(200).send({ message: 'E-mail envoyé avec succès et données enregistrées.' });
    }
});
});

app.listen(port, () => {
console.log(`Serveur backend démarré sur le port ${port}`);
});