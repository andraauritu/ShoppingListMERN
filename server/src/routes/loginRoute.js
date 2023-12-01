const secretKey = process.env.SECRET_KEY;
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken'); // Add this line

module.exports = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(401).json({ message: 'Authentication failed' }); }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            // User is authenticated
            const token = jwt.sign({ id: user._id }, secretKey); // Add this line
            return res.status(200).json({ message: 'Login successful', user, token });
        });
    })(req, res, next);
}
