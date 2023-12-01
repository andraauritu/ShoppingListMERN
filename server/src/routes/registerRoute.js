const express = require('express');
const User = require('../models/UserModel'); // Assuming you have a User model

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'A user with this username already exists' });
        }

        // Create a new user
        const user = new User({ username, password });
        await user.save();

        // Send a success response
        res.status(200).json({ message: 'User registered successfully', user });
    } catch (error) {
        // Send an error response
        res.status(500).json({ message: 'An error occurred while registering the user', error });
    }
};
