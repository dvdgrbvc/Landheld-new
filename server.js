const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT || 5000, () => console.log("Server Running"));
if (process.env.NODE_ENV === "production") {
  //   // dbParams.connectionString = process.env.DATABASE_URL;
  //   // dbParams.ssl = { rejectUnauthorized: false };
  //   //server static content
  //   //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dgrabovac3@gmail.com",
    pass: "mqzikrpbwenggpkl",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "david.grabovac@gmx.net",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Die Nachricht wurde erfolgreich gesendet!" });
    }
  });
});
