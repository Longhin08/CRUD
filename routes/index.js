const express = require('express');

const usuarioRouter = require('./buscaUsuario');

const router = express.Router();

router.use('/usuario', usuarioRouter)

module.exports.Router;

