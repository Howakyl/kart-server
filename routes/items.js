const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.items.index);

module.exports = router;