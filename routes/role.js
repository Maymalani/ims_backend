var express = require('express');
const role = require('../controller/role')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/role',auth.check_token,role.add_role);
router.post('/role_update/:id',auth.check_token,role.role_update);
router.get('/role_update/:id',auth.check_token,role.viewrole_update);
router.get('/role_delete/:id',auth.check_token,role.role_delete);
router.get('/view_role',auth.check_token,role.view_role);
router.get('/find_role',auth.check_token,role.find_role);
module.exports = router;