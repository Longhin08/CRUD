const mongoose = require ('mongoose');

const UserSchema = require ('./user');
const User = mongoose.model ('User', UserSchema);

const connect = () => {
    mongoose.connect(process.env.MONGO_URL);

};

module.exports = {
    connect,
    User
};