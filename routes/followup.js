var express = require('express');
const followup = require('../controller/followup')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/followup',auth.check_token,followup.followup);
router.post('/followup_update/:id',auth.check_token,followup.followup_update);
router.get('/followup_update/:id',auth.check_token,followup.viewfollowup_update);
router.get('/followup_delete/:id',auth.check_token,followup.followup_delete);
router.get('/view_followup',auth.check_token,followup.view_followup);
router.get('/find_followup',auth.check_token,followup.find_followup);
module.exports = router;