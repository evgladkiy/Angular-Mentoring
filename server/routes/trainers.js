const express = require('express');
const router = express.Router();
const fs = require('fs');

let trainers = JSON
    .parse(fs.readFileSync('server/data/trainers.json', 'utf8'))
    .sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
    
        return 0;
    });
    
router.get('', (req, res, next) => {
	res.json(trainers);
});

module.exports = router;
