
const express = require('express');
const router = express.Router()
const general_ledger_book_detail = require('../controllers/general_ledger_book_detail');

router.get('/', general_ledger_book_detail.findAll)
router.get('/:noTrans', general_ledger_book_detail.findOne)
router.post('/', general_ledger_book_detail.create)
router.put('/:noTrans/:code',general_ledger_book_detail.update)
router.delete('/:noTrans', general_ledger_book_detail.delete)

module.exports = router
