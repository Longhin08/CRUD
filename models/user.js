const { Schema } = require('mongoose');

const User = new Schema({
    nome: {
        type: String,
        required: true,
        min: 4,
    },
    email: {
        type: String,
        required: true,
        min: 4,
        unique: true,
        validate: {
            validator: function(v){
                return v.match('@');
            },
            message: props => `${props.value} não é um e-mal válido`
        },
    },
    senha: {
        type: String,
        required: true,
    },
});

module.exports = User;
