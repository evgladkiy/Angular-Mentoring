const express = require('express');

const users = require('./routes/users');
const courses = require('./routes/courses');
const trainers = require('./routes/trainers');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
	next();
})

app.use(express.json());

app.use('/users', users);
app.use('/courses', courses);
app.use('/trainers', trainers);

app.listen(3000, () => console.log('server started'))

