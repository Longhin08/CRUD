require('dotenv').config();

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const { connect, User } = require('./models');

const populaDB = async () => {
    connect();
     
    await User.create({
        nome: "João Victor",
        email: "jv.slkfjgdh@outlook.com",
        senha: await bcrypt.hash('cudoendo', 10),
    });

    await mongoose.disconnect();
};

populaDB()