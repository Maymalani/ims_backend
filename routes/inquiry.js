var express = require('express');
const inquiry = require('../controller/inquiry')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/inquiry',auth.check_token,inquiry.inquiry);
router.post('/verify-otp', auth.check_token,inquiry.verifyOTP);
router.post('/inquiry_update/:id',auth.check_token,inquiry.inquiry_update);
router.get('/inquiry_update/:id',auth.check_token,inquiry.viewinquiry_update);
router.get('/inquiry_delete/:id',auth.check_token,inquiry.inquiry_delete);
router.get('/view_inquiry',auth.check_token,inquiry.view_inquiry);
router.get('/find_inquiry',auth.check_token,inquiry.find_inquiry);
module.exports = router;