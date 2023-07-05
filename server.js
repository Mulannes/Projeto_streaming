const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const path = require('path');
const mongoose = require("mongoose");
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
app.use(cors())

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
    console.log('🟢 Connection established');
    app.listen(3001);
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to Database because ${err}`);
    return
  })

const User = require('./models/user');

app.use(cors());
app.use(express.json());

// Cadastro
app.post("/register", async (req, res) => {
  const username = req.body.user;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword

    if(!username){
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
    const userexists = await User.findOne({
      username:username
    })
    if (userexists){
      return res.status(422).json({
        msg:'Esse usuário já está cadastrado.'
      })
    }
    const user_id = uuidv4()
    const user = new User({
      user_id, username, email, password
    })
    try {
      await user.save()
      res.status(201).json({
        msg:'O usuário foi autenticado.'
      })
    } catch (error) {
      res.status(500).json({
        msg:error
      })
    }
});

// Login
app.post("/login", async (req, res) => {
  const username = req.body.user;
  const password = req.body.password;

  if(!username){
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
    // const loginservices = (username)=> User.findOne({username:username}).select('+password')
    // const user = await loginservices(username)
    const user = await User.findOne({
      username:username
    })
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