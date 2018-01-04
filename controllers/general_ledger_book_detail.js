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

class GeneralLedgerBookDetail {
  static findAll(req,res){
    models.general_ledger_book_detail.findAll({order:[['noTrans','asc'],['accountCode','asc'],['groupCode','asc'],['typeCode','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static findOne(req,res){
    models.general_ledger_book_detail.findAll({
      where:{
        noTrans: req.params.noTrans
      }
    },{order:[['order','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static create(req,res){
    models.general_ledger_book_detail.create(req.body)
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static update(req,res){
    // console.log(req.params);
    var code=req.params.code.split('.')
    // console.log(code);
    models.general_ledger_book_detail.update(req.body,{
      where:{
        noTrans: req.params.noTrans,
        accountCode: code[0],
        groupCode: code[1],
        typeCode: code[2]
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
    models.general_ledger_book_detail.destroy({
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

module.exports = GeneralLedgerBookDetail
