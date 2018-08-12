const express = require('express');
const router = express.Router();
var fs = require('fs');

var users = JSON.parse(fs.readFileSync('server/data/users.json', 'utf8'));

router.get('', (req, res, next) => {
	res.json(users);
});

router.get('/auth', (req, res, next) => {
    const { user: queryUser, password: queryPassword } = req.query;

    if (queryUser && queryPassword) {
        const user = users.find((user) => user.name === queryUser && user.password === queryPassword);

        if (!user) {
            res.status(404).send('Cannot find user!');
        }

        res.json({token: user.id})
    }
});

router.get('/userInfo', (req, res, next) => {
    const { token: id } = req.query;
    
    if (id) {
        const user = users.find((user) => id === user.id);

        if (!user) {
            res.status(404).send('Invald token!');
        }

        res.json(user);
    }
});

module.exports = router;
