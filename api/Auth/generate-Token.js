const jwt = require('jsonwebtoken');
const { secret } = require('../../config/secret.js');

module.exports = (user) => {

    const payload = {
        userId: user.id,
        username: user.username,
    }

    const options = {
        expiresIn: '6hr'
    }

    return jwt.sign(payload, secret, options)

}