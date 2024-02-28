const express = require('express'); 
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

 
const app = express(); 
//convert data to json format
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.set('view engine','ejs');

app.use(express.static('frontend'));


// app.get('/', (req, res)=>{ 
//   res.status(200); 
//   res.send("home page"); 
// }); 
app.get('/', (req, res)=>{ 
  
  res.render("login")
}); 


app.get("/signup",(req,res)=> {
   res.render("signup");

});

app.get('/login' , (req,res) => {
  res.sendFile(path.join(__dirname,".../views/login.html"));
});

//register user
app.post("/signup", async(req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password
  }

  const existingUser = await collection.findOne({name: data.name});
  if(existingUser) {
    res.send("user already exist. pls find another name.");
  }else{
    const saltRounds= 10;
    const hashedPassword = await bcrypt.hash(data.password,saltRounds);
    data.password=hashedPassword;

    const userdata = await collection.insertMany(data);
    console.log(userdata); 
  }
});

//login user
app.post("/login", async(req,res) => {
  try{
    const check = await collection.findOne({name: req.body.username});
    if(!check){
      res.send("user name not found");
    }
    //comp pass
    const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);
    if(isPasswordMatch){
      res.render("home");
    }else{
      req.send("wrong password");
    }
     
  }catch
    {
      res.render("home");
  }
});
const port = 5000;
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});