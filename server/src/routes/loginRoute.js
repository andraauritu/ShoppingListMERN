const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    console.log(req.body);
    if (req.body.password === process.env.PASSWORD) {
        const token = jwt.sign({
            userId: 1,

        }, process.env.SECRET_KEY);

        res.json({
            token
        });

        // res.send('Login Successful');
    }
    else {
        res.status(401).send('Login Failed');
    }
    // res.send('Hello World');
}