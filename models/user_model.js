const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const user_schema = new Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    }

});

const User = module.exports = mongoose.model('User', user_schema);

module.exports.createUser = async newUser => {

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    const new_user = await newUser.save();
    return new_user;
};

module.exports.getUserByUsername = async username => {
    var query = { username: username };
    var new_user = await User.findOne(query);
    return new_user;
};

module.exports.getUserById = async id => {
    const new_user = await User.findById(id);
    return new_user;
};

module.exports.comparePassword = async (candidatePassword, hash) => {
    const isMatch = await bcrypt.compare(candidatePassword, hash);
    return isMatch;
};