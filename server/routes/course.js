const express = require('express');
const courseController = require('../controllers/course.js')
var router = express.Router()

router.get('/:course_id', courseController.getDeatailCourse);
router.post('/search', courseController.searchCourse);

module.exports = router