const express = require('express');
require('dotenv').config();
// const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./src/routes/router');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session'); //this will allow us to use sessions in our app
//a session is a way to store data on the server that is related to a specific user
//this data is stored in a session object
//the session object is stored in a database
//the session object is then sent to the client as a cookie
//the client will then send the cookie back to the server on every request
const User = require('./src/models/UserModel');
const app = express();

const sessionConfig = {
    name: 'session',
    // store,
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, //this is for security reasons
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //this is for the cookie to expire in a week
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

mongoose.connect('mongodb://127.0.0.1:27017/shoppingListMERN').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error connecting to MongoDB');
    console.log(err);
});

app.use(session(sessionConfig));

app.use(express.json());
app.use(morgan('tiny'));

app.use(cors()); //this will allow all requests from all origins to access our API
//configure the app

app.use('/', router);

// app.set('views', './src/views'); //this will allow us to use the views folder to render our HTML files
// app.set('view engine', 'ejs'); //this will allow us to use ejs as our view engine
//a view engine is a tool that allows us to use static template files in our app
//we will use ejs to render our HTML files
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser()); //refers to how we store a user in a session
passport.deserializeUser(User.deserializeUser()); //refers to how we unstore a user in a session



app.listen(8080, () => {
    console.log('Server is running on port 8080');
});