const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const dbuser = process.env.dbuser;
const dbpass = process.env.dbpass;

mongoose.connect(`mongodb+srv://${dbuser}:${dbpass}@shortfilms.yoa2vmk.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('🟢 Connection established');
    app.listen(3000);
  })
  .catch((err) => {
    console.log(`🔴 Error connecting to the database: ${err}`);
    process.exit(1);
  });

const User = require('./models/user');

// Cadastro
app.post("/register", async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;

  if (!username || !email || !password || !confirmpassword) {
    return res.status(422).json({
      msg: '🔴 Preencha todos os campos obrigatórios.'
    });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({
      msg: '🔴 As senhas precisam ser iguais.'
    });
  }

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(422).json({
        msg: '🔴 Esse usuário já está cadastrado.'
      });
    }

    const user_id = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      user_id,
      username,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      msg: '🟢 Usuário cadastrado com sucesso.'
    });
  } catch (error) {
    console.log(`🔴 Error saving user to database: ${error}`);
    res.status(500).json({
      msg: '🔴 Erro ao salvar o usuário no banco de dados.'
    });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      msg: '🔴 Preencha todos os campos obrigatórios.'
    });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        msg: '🔴 Credenciais inválidas.'
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        msg: '🔴 Credenciais inválidas.'
      });
    }

    res.status(200).json({
      msg: '🟢 Usuário autenticado com sucesso.'
    });
  } catch (error) {
    console.log(`🔴 Error finding user in database: ${error}`);
    res.status(500).json({
      msg: 'Erro ao buscar o usuário no banco de dados.'
    });
  }
});

app.listen(3002, () => {
  console.log("🟢 Servidor rodando na porta 3002");
});