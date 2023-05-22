const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// for serving static files
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// pug stuff
// setting template engine as pug
app.set("view engine", "pug");
// setting view directory
app.set("views", path.join(__dirname, "views"));

// pug demo endpoint
// app.get('/demo',(req,res)=>{
//     res.render('demo', { title: 'Hey Vishal', message: 'Hello there! And Welcome to Pug' })
// })

// endpoint
app.get("/", (req, res) => {
  const con = "This is its content";
  const params = { title: "Pug backend tool", content: con };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  // const con = "This is its content";
  myName = req.body.myName;
  myAge = req.body.myAge;
  myGender = req.body.myGender;
  address = req.body.address;
  aboutyou = req.body.aboutyou;
  let details = `The name of the client is ${myName} of age ${myAge} having gender ${myGender} lives in ${address} and something about the client: ${aboutyou}`;
  
  fs.writeFileSync("output.txt", details);

  const params = { message: "Form submitted successfully" };
  res.status(200).render("index.pug", params);
});

// app.get("/about",(req,res)=>{
//     res.send('This is get request about page of my first express website');
// });

// app.post("/about",(req,res)=>{
//     res.send('This is post request about page of my first express website');
// });

// app.get("/services",(req,res)=>{
//     res.send('This is services page of my first express website');
// });

// app.get("/contact",(req,res)=>{
//     res.send('This is contact page of my first express website');
// });

// app.get("/login",(req,res)=>{
//     res.status(404).send('This page is not found');
// });

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
