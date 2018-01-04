const express = require('express');
const router = express.Router()
const config_user = require('../controllers/config_user');

router.get('/', config_user.findAll)
router.get('/:uname', config_user.findOne)
router.post('/', config_user.create)
router.put('/:uname', config_user.update)
router.delete('/:uname', config_user.delete)

module.exports = router
