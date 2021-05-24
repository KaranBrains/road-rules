require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.contactUs = (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.message) {
    return res.status(400).send({ msg: 'You need to send all entries' });
  }
  const msg = {
  to: req.body.email,
  from: process.env.SENDGRID_EMAIL, // Change to your verified sender
  subject: `Query from ${req.body.name} (${req.body.email})`,
  text: 'Contact Message',
  html: ` <pre>${req.body.message}</pre>`,
  }
  sgMail.send(msg)
  .then(info => {
      console.log(info)
      res.status(200).send({msg: "Mail Sent Succesfully"})
  })
  .catch(err => {
      res.status(400).send({msg: "Could not send mail"})
  });
};

