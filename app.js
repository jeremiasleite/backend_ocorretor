const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

console.log(process.env.DB_URL)
// Conecta no MongoDB
mongoose.connect(  
  process.env.DB_URL,   
  {useNewUrlParser: true}
);

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.get('/', function (req, res) {
  res.send('Bem vindo! a API corretor de imóveis.');
});
app.use("/api/user", require("./routes/userRouter"))
app.use("/api/imovel", require("./routes/imovelRouter"))

module.exports = app;

