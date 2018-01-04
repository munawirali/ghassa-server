const models = require('../models');

class ConfigGroupCode {
  static findAll(req,res){
    models.config_group_code.findAll({order:[['accountCode','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static findOne(req,res){
    var code=req.params.code.split('.')
    models.config_group_code.findOne({
      where:{
        accountCode: code[0],
        groupCode: code[1]
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
    models.config_group_code.create(req.body)
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static update(req,res){
    var code=req.params.code.split('.')
    models.config_group_code.update(req.body,{
      where:{
        accountCode: code[0],
        groupCode: code[1]
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
    var code=req.params.code.split('.')
    models.config_group_code.destroy({
      where:{
        accountCode: code[0],
        groupCode: code[1]
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

module.exports = ConfigGroupCode
