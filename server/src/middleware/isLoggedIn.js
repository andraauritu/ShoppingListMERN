const jwt = require('jsonwebtoken');
const User = require('../models/UserModel.js');
const passport = require('passport');

// isLoggedIn.js
const isLoggedIn = (req, res, next) => {
    // Check if user is authenticated
    console.log('REQ.USER...', req.user); //req.user is filled in by passport with the serialized user info
    if (req.isAuthenticated()) { //isAuthenticated() is a method provided by passport
        return next(); // User is logged in, proceed to the next middleware or route handler
    }

    // User is not logged in, redirect to login page
    req.session.returnTo = req.originalUrl

    res.redirect('/login');
};

module.exports = isLoggedIn;



// module.exports = (req, res, next) => {
//     console.log('REQ.USER...', req.user); //req.user is filled in by passport with the serialized user info
//     if (!req.isAuthenticated()) { //isAuthenticated() is a method provided by passport
//         //store the url they are requesting
//         // req.flash('error', 'You must be signed in first!');
//         return res.redirect('/login');
//     }
//     next();
// }



// module.exports = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//         res.status(403).send('invalid credentials');
//     }
//     else {
//         const token = authHeader.split(' ')[1];
//         console.log(token);
//         jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//             if (err) {
//                 res.status(403).send('invalid credentials');
//             }
//             else {
//                 console.log(decoded);
//                 next();
//             }
//         });
//     }
// }