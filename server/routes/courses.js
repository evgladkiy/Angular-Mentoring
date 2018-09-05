const express = require('express');
const router = express.Router();
const fs = require('fs');

function processСourses(courses) {
    return courses
        .map((course) => {
            course.date = new Date(course.date);
            return course;
        })
        .sort((courseA, courseB) => Number(courseA.date) - Number(courseB.date));
}

let courses = JSON.parse(fs.readFileSync('server/data/courses.json', 'utf8'));

courses = processСourses(courses);

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

    if (page && count ) {
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
        res.json({
            status: 'error',
            msg: `Cannot find course id - ${id}`,
        });
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const filtredCourses = courses.filter(course => course._id !== id);
    let resJson;

    if (filtredCourses.length !== courses.length) {
        courses = filtredCourses;
        resJson = {
            status: 'OK',
            msg: `Course id - ${id} was deleted`,
        }
    } else {
        resJson = {
            status: 'error',
            msg: `Cannot find course id - ${id}`,
        };
    }

    res.json(resJson);
});

router.post('/', (req, res, next) => {
    const course = req.body;
    
    courses.push(course);
    courses = processСourses(courses);
    res.send(JSON.stringify({
        status: 'OK',
        msg: `Course id - ${course._id} was added to db`,
    }));
});

router.post('/:id', (req, res, next) => {
    const reqCourse = req.body;
    const reqCourseId = reqCourse._id;
    const courseIndex = courses.findIndex(course => course._id === reqCourseId);
    let resJson;

    if (courseIndex >= 0) {
        courses.splice(courseIndex, 1, reqCourse);
        courses = processСourses(courses);

        resJson = {
            status: 'OK',
            msg: `Course id - ${reqCourseId} was updated`,
        }
    } else {
        resJson = {
            status: 'OK',
            msg: `Cannot find course id - ${reqCourseId}`,
        }
    }

    res.json(resJson);
});

module.exports = router;
