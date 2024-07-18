var express = require('express');
const course = require('../controller/course')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/course',auth.check_token,course.course);
router.post('/course_update/:id',auth.check_token,course.course_update);
router.get('/course_update/:id',auth.check_token,course.viewcourse_update);
router.get('/course_delete/:id',auth.check_token,course.course_delete);
router.get('/view_course',auth.check_token,course.view_course);
router.get('/find_course',auth.check_token,course.find_course);
module.exports = router;