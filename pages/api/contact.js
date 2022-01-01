import { getDomainLocale } from "next/dist/shared/lib/router/router";

export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: "mail.runzadar.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_USER, // generated ethereal user
      pass: process.env.NEXT_PUBLIC_PASS, // generated ethereal password
    },
  });

  const mailData = {
    from: req.body.email,
    to: "info@runzadar.com",
    subject: `Message From ${req.body.ime} ${req.body.prezime}`,
    text: " | Sent from: " + req.body.email,
    html: `<div>Prijava Škole trčanja Zadar za:</div><p>Sent from: ${req.body.email}</p><div>Rođen: ${req.body.datum}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
