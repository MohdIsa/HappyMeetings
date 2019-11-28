const express = require('express')
const app = express()
const { Host, Visitor, db } = require('./db')
app.use(express.json())
var cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
var nodemailer = require('nodemailer');

//Setting the local time
var indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
indiaTime = new Date(indiaTime);

var msgtohost = "Hey! A visitor has come to visit you."
var msgtovisitor = "Thanks for visiting us.Looking forward to meeting you soon."


//Setting the details via which the emails will be sent
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohdravil001@gmail.com',
    pass: 'mohdravil123@'
  }
});


//Creating the table Host and Visitor
//Information is stored in the respective tables.
app.post('/database', async (req, res) => {

  let item1 = await Host.create(
    {
      Name: req.body.hname,
      Email: req.body.hemail,
      Number: req.body.hnumber,
      Address: req.body.address,
    }
  )

  let item = await Visitor.create({
    Name: req.body.vname,
    Email: req.body.vemail,
    Number: req.body.vnumber,
    HostId: item1.id,
    CheckIn: indiaTime.toLocaleString()

  })
  let name = item.Name;
  let email = item.Email;
  let number = item.Number;
  let hnumber = item1.Number
  let checkIn = item.CheckIn;
  let id = item.id;
  res.cookie('id', id, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  console.log(name);
  console.log(email);
  console.log(hnumber)


  //Sending email to the Host
  //Contains the information about the visitor
  var mailOptions = {
    from: 'mohdravil001@gmail.com',
    to: item1.Email,
    subject: 'Visit Status',
    text: `${msgtohost}\nVisitor's Name - ${name}\nVisitor's Email - ${email}\nVisitor's Ph No- ${number}\nVisitor's Checkin Time- ${checkIn}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect('/WaitingPage.html')
})

//Route to handle the checkout of the user
app.get('/end', async (req, res) => {
  let id = req.cookies.id;
  console.log(id)
  let item = await Visitor.findOne({
    include: [{
      model: Host
    }],
    where: {
      id: id
    }
  })

  //Setting the local time and date for the checkout time
  indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  indiaTime = new Date(indiaTime);


  //Sending email to visitor
  //Contains the information about the visitor and the host
  var mailOptions = {
    from: 'mohdravil001@gmail.com',
    to: item.Email,
    subject: 'Visit Status',
    text: `${msgtovisitor}\nYour Name - ${item.Name}\nPh No - ${item.Number}\nYour Checkin Time - ${item.CheckIn}\nYour Checkout Time - ${indiaTime.toLocaleString()}\nHost's Name - ${item.Host.Name}\nAddress Visited - ${item.Host.Address}\n`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  //sending response to user 
  res.sendStatus(200)

})

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log("localhost:3000")
})
