const express = require('express');

const users = require('./routes/users');
const courses = require('./routes/courses');

const app = express();

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.use(express.json());

app.use('/users', users);
app.use('/courses', courses);

app.listen(3000, () => console.log('server started'))

