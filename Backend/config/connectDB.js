// const express = require('express');
// const app = express();
// const UserModel =require("")
// const mongoose = require('mongoose');

// const uri ='mongodb+srv://koskos:koskos123@koskos.egzzegf.mongodb.net/';
// mongoose.connect(uri)

// const cors = require('cors'); 
// app.use(express.json)
// app.use(cors());

// app.get("/getUsers", async (req, res) => {
//   try {
//       const users = await UserModel.find({});
//       res.json(users);
//   } catch (error) {
//       console.error("Error retrieving users:", error);
//       res.status(500).send("Internal Server Error");
//   }
// });

// app.post("/createusers", async (req, res) => {
//       const user = req.body
//       const newuser = new UserModel(user);
//       await newuser.save()

//       res.json(user)

// });

// app.listen(3000, () => {
//   console.log("Server runs perfectly !")
//  })