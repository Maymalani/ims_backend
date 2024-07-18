var express = require('express');
const branch = require('../controller/branch')
var router =  express.Router();
const auth = require('../middleware/auth');

router.post('/branch',auth.check_token,branch.branch);
router.post('/branch_update/:id',auth.check_token,branch.branch_update);
router.get('/branch_update/:id',auth.check_token,branch.viewbranch_update);
router.get('/branch_delete/:id',auth.check_token,branch.branch_delete);
router.get('/view_branch',auth.check_token,branch.view_branch);
router.get('/find_branch',auth.check_token,branch.find_branch);
module.exports = router;