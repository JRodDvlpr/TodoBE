const jwt = require('jsonwebtoken');
const secrets = require('../../config/secret')


module.exports = (req, res, next) => {

    const token = req.headers.authorization
    const secret = secrets.jwtSecret

    if(token) {
        jwt.verify(token, secret, (err, decodedJwt) => {
            if(err) {
                res.status(401).json({ message: "Unauthorized: Error 401 Access is Denied"})
            } else {
                req.decodedJwt = decodedJwt;
                console.log(decodedJwt);
                next();
            }
        })
    } else {
        res.status(401).json({ 401: "Not Authorized To Enter"})
    }
};