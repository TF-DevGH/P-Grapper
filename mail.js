const nodemailer = require('nodemailer');

// Configuration du transporteur SMTP
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'MyBot2266@gmail.com', // Adresse e-mail de l'expéditeur
        pass: 'Popo7132' // Mot de passe de l'expéditeur
    }
});

// Fonction qui envoie l'e-mail
function envoyerMail() {
    let mailOptions = {
        from: 'MyBot2266@gmail.com', // Adresse e-mail de l'expéditeur
        to: 'ThomasFantouPro@gmail.com', // Adresse e-mail du destinataire
        subject: 'Test',
        text: 'Un prix a été découvert : lien changeable ou à changer'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Mail envoyé: ' + info.response);
        }
    });
}
// Test ajout de ma part :
function activerPrix() {
    prixOk = true;
}

// Vérification de la condition "prixOk"
if (prixOk) {
    envoyerMail();
}