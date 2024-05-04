const express = require("express")
const app =express()
const UserModel= require('./models/User')
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://koussayfattoum480:koskos2001F@pfacluster.hmw6dff.mongodb.net/?retryWrites=true&w=majority&appName=PFAcluster");

const cors = require('cors'); 
app.use(express.json());
app.use(cors());

app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/createusers", async (req, res) => {
        const user = req.body
        const newuser = new UserModel(user);
        await newuser.save()

        res.json(user)

});

app.post("/login", async (req, res) => {
  const {username,password} = req.body;

  UserModel.findOne({username:username})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json("Success")
      }else {
        res.json("the password is incorrect")
      }
   }else {
      res.json("no record existed")
    }
  })

  

});


 
app.listen(3001, () => {
 console.log("Server runs perfectly !")
})