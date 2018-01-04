const express = require('express');
const router = express.Router()
const config_group_code = require('../controllers/config_group_code');

router.get('/', config_group_code.findAll)
router.get('/:code', config_group_code.findOne)
router.post('/', config_group_code.create)
router.put('/:code',config_group_code.update)
router.delete('/:code', config_group_code.delete)

module.exports = router
