const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
  
// GET, POST, PUT, DELETE
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição) 

const app = express();

mongoose.connect('mongodb+srv://user:betegas@cluster0-c9yy2.mongodb.net/approval?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                 useUnifiedTopology: true,
                })

app.use(express.json());

app.use(routes);

app.listen(3333);