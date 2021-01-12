const express = require('express');
const courseController = require('../controllers/course.js')
var router = express.Router()


router.get('/', courseController.getCoursePaging);
router.get('/search', courseController.searchCourse);
router.get('/:id', courseController.getDeatailCourse);

//Đăng nhập
router.get('/:id/like', courseController.addCourseWatchList);
router.get('/:id/join', courseController.joinCourse);

router.get('/:id/rating', courseController.ratingCourse);
router.get('/:id/check_joined', courseController.checkJoin);



module.exports = router