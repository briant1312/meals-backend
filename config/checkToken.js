const jwt = require('jsonwebtoken');

function checkToken(req, res, next) {
    let token = req.get('Authorization') || req.query.token;

    if (token) {
        token = token.replace('Bearer ', '')
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) {
                req.user = null;
            } else {
                req.user = decoded.user;
                req.exp = new Date(decoded.exp * 1000);
            }
        })
    } else {
        req.user = null;
    }
    next()
}

module.exports = checkToken;
