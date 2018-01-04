const models = require('../models');

class ConfigUser {
  static findAll(req,res){
    models.config_user.findAll({order:[['uname','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static findOne(req,res){
    models.config_user.findOne({
      where:{
        uname: req.params.uname
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
    models.config_user.create(req.body)
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static update(req,res){
    console.log(req.uname);
    models.config_user.update(req.body,{
      where:{
        uname: req.params.uname
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
    models.config_user.destroy({
      where:{
        uname: req.params.uname
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

module.exports = ConfigUser
