const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require('path');
const mongoose = require("mongoose");
require('dotenv').config();

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "shortfilms",
// });

const dbuser = process.env.dbuser;
const dbpass = process.env.dbpass;

mongoose
  .connect(
    `mongodb+srv://${dbuser}:${dbpass}@shortfilms.yoa2vmk.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('🟢 Connection established with SmartID_BD');
    app.listen(3001);
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to Database because ${err}`);
    return
  })

const user = require('./models/user');

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  const user = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword

    if(!user){
      return res.status(422).json({
        msg:'É obrigatório colocar um nome de usuário.'
      })
    }
    if(!email){
      return res.status(422).json({
        msg:'É obrigatório colocar um email.'
      })
    }
    if(!password){
      return res.status(422).json({
        msg:'É obrigatório colocar uma senha.'
      })
    }
    if(password !== confirmpassword){
      return res.status(422).json({
        msg:'As senhas precisam ser iguais.'
      })
    }
    const userexists = await user.findOne({
      user:user
    })
    if (userexists){
      return res.status(422).json({
        msg:'Esse usuário já está cadastrado.'
      })
    }
    const User = new user({
      user_id, user, email, password
    })
    try {
      await User.save()
      res.status(201).json({
        msg:'O usuário foi autenticado.'
      })
    } catch (error) {
      res.status(500).json({
        msg:error
      })
    }
});


app.post("/login", async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  if(!user){
    return res.status(422).json({
      msg:'É obrigatório colocar um nome de usuário.'
    })
  }
  if(!password){
    return res.status(422).json({
      msg:'É obrigatório colocar uma senha.'
    })
  }
  try {
    const loginservices = (user)=> user.findOne({user:user}).select('+password')
    const user = await loginservices(user)
    if (!user){
      return res.status(401).send('credenciais inválidas')
    }

  } catch (error) {
          res.status(500).send(error.message)
  }
});

app.listen(3000, () => {
  console.log("rodando na porta 3000");
});