const express = require('express');
const router = express.Router()
const config_account_code = require('../controllers/config_account_code');

router.get('/', config_account_code.findAll)
router.get('/:code', config_account_code.findOne)
router.post('/', config_account_code.create)
router.put('/:code',config_account_code.update)
router.delete('/:code', config_account_code.delete)

module.exports = router
