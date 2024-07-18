var express = require('express');
const reference = require('../controller/ref')
var router = express.Router();
const auth = require('../middleware/auth');

router.post('/reference', auth.check_token, reference.reference);
router.post('/reference_update/:id', auth.check_token, reference.reference_update);
router.get('/reference_update/:id', auth.check_token, reference.viewreference_update);
router.get('/reference_delete/:id', auth.check_token, reference.reference_delete);
router.get('/view_reference', auth.check_token, reference.view_reference);
router.get('/find_reference', auth.check_token, reference.find_reference);

module.exports = router;