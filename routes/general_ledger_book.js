const express = require('express');
const router = express.Router()
const general_ledger_book = require('../controllers/general_ledger_book');

router.get('/', general_ledger_book.findAll)
router.get('/:noTrans', general_ledger_book.findOne)
router.post('/', general_ledger_book.create)
router.put('/:noTrans',general_ledger_book.update)
router.delete('/:noTrans', general_ledger_book.delete)

module.exports = router
