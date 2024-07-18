var express = require('express');
const status = require('../controller/status')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/status',auth.check_token,status.status);
router.post('/status_update/:id',auth.check_token,status.status_update);
router.get('/status_update/:id',auth.check_token,status.viewstatus_update);
router.get('/status_delete/:id',auth.check_token,status.status_delete);
router.get('/view_status',auth.check_token,status.view_status);
router.get('/find_status',auth.check_token,status.find_status);
module.exports = router;