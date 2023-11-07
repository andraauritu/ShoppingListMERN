const User = require('../models/UserModel.js');

module.exports = async (req, res) => {
    console.log('fakeUserRoute was executed');
    const user = new User({ email: 'gaby@gmail.com', name: 'Gaby', username: 'gabyy27' });
    const newUser = await User.register(user, 'chicken');
    res.json(newUser);
};