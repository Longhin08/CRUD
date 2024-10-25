const express = require('express');

require('dotenv').config();

const { connect } = require('./models');

const router = require('./routes');

const app = express();
const porta = 3000;

app.listen(porta, () => {
    connect();
    console.log("Servidor ouvindo na porta: " + porta);
    
});