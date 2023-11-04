const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(403).send('invalid credentials');
    }
    else {
        const token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(403).send('invalid credentials');
            }
            else {
                console.log(decoded);
                next();
            }
        });
    }
}