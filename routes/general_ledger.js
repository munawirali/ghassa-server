const express = require('express');
const router = express.Router()
const general_ledger = require('../controllers/general_ledger');

router.get('/', general_ledger.findAll)
router.get('/:noTrans', general_ledger.findOne)
router.post('/', general_ledger.create)
router.put('/:noTrans',general_ledger.update)
router.delete('/:noTrans', general_ledger.delete)

module.exports = router
