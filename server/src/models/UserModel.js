const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required']
    }
}
);

UserSchema.plugin(passportLocalMongoose); //this will add a username and password field to our schema

module.exports = mongoose.model('User', UserSchema); //this will create a collection called users in our database