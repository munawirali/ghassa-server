const express = require('express');
const router = express.Router()
const config_type_code = require('../controllers/config_type_code');

router.get('/', config_type_code.findAll)
router.get('/:code', config_type_code.findOne)
router.post('/', config_type_code.create)
router.put('/:code',config_type_code.update)
router.delete('/:code', config_type_code.delete)

module.exports = router
