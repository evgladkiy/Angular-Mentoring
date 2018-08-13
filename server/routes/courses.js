const express = require('express');
const router = express.Router();
var fs = require('fs');

var courses = JSON.parse(fs.readFileSync('server/data/courses.json', 'utf8'))
    .map((course) => {
        course.date = new Date(course.date);
        return course;
    })
    .sort((courseA, courseB) => Number(courseA.date) - Number(courseB.date));

router.get('', (req, res, next) => {
    const page = Number(req.query.page);
    const count = Number(req.query.count);
    const query = req.query.q;
    let resCourses = [... courses];

    if (query) {
        resCourses = resCourses.filter((course) => (
            course.title.toLowerCase().indexOf(query) >= 0 ||
            course.description.toLowerCase().indexOf(query) >= 0
        ))
    };

    if ((page <=  Math.ceil(resCourses.length / count) && page >= 1) && count >= 0) {
        const start = (page - 1) * count ;
        const end = start + count < resCourses.length ? start + count : resCourses.length;
        const slicedCourses = resCourses.slice(start, end);

        res.json({
            courses: slicedCourses,
            coursesCount: resCourses.length,
        });

        return;
    }

    res.json({
        courses: resCourses,
        coursesCount: resCourses.length,
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const course = courses.find(course => course._id === id)
    
    if (course) {
        res.send(course);
    } else {
        throw Error(`Cannot find article with ID: ${id}`);
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const filtredCourses = courses.filter(course => course._id !== id);
    let resJson;

    if (filtredCourses.length === courses.length) {
        resJson = {
            status: 'error',
            msg: `Cannot find course id - ${id}`,
        };
    } else {
        courses = filtredCourses;
        resJson = {
            status: 'OK',
            msg: `Course id - ${id} was deleted`,
        }
    }

    res.json(resJson);
});

module.exports = router;
