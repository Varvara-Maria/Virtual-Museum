const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465,
    secure: true,
    auth: {
      user: 'varyaa2002@gmail.com',
      pass: 'ebpervrxyiliwzmp'
    }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

transporter.verify().then(console.log).catch(console.error);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.post('/send', (req, res, next) => {
console.log(req.body.email);
  transporter.sendMail({
    from:`${req.body.email}`,
    to:`varyaa2002@gmail.com`,
    subject:`feedback from ${req.body.name}, ${req.body.email}`,
    text:`${req.body.message}`,
    html: ""
  }).then(info =>{
    console.log(info);
  }).catch(console.error)

  res.json()
})