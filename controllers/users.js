const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    )
}

async function create(req, res) {
    try {
        let { password, username } = req.body;
        const takenUser = await User.findOne({ username });
        if(takenUser) {
            res.status(400).json("username already exists");
        } else {
            password = await bcrypt.hash(password, SALT_ROUNDS);
            const user = await User.create({ username, password });
            const token = createJWT({ 
                username: user.username,
                password: user.password
            })
            res.json(token);
        }
    } catch (err) {
        // res.status(400).json(err.message);
        res.status(400).json("unable to process request");
    }
}

async function login(req, res) {
    let { password, username } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json("username or password is incorrect");
        }

        if(bcrypt.compareSync(password, user.password)) {
            res.json(createJWT({ 
                username: user.username,
                password: user.password,
            }))
        } else {
            return res.status(422).json("username or password is incorrect");
        }

    } catch (err) {
        res.status(400).json("unable to process request");
    }
}

module.exports = {
    create,
    login,
}
