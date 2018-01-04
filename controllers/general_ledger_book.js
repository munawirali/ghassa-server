/*
type
0 = saldoawal
1 = pendapatan
2 = penerimaan pinjaman
3 = beban
4 = pengembalian pinjaman
5 = investasi
6 = koreksi
*/
const models = require('../models');

class GeneralLedgerBook {
  static findAll(req,res){
    models.general_ledger_book.findAll({order:[['dateTrans','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static findOne(req,res){
    models.general_ledger_book.findOne({
      where:{
        noTrans: req.params.noTrans
      }
    })
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static create(req,res){
    models.general_ledger_book.create(req.body)
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static update(req,res){
    models.general_ledger_book.update(req.body,{
      where:{
        noTrans: req.params.noTrans
      }
    })
    .then(response => {
      // console.log('ini response', response);
      if (response) {
        res.status(200).json(response)
      } else {
        res.status(204).json()
      }
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static delete(req,res){
    models.general_ledger_book.destroy({
      where:{
        noTrans: req.params.noTrans
      }
    })
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
}

module.exports = GeneralLedgerBook
