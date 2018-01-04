const models = require('../models');

class ConfigStore {
  static findAll(req,res){
    models.config_store.findAll({order:[['name','asc']]})
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static findOne(req,res){
    models.config_store.findOne({
      where:{
        id: req.params.id
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
    // console.log(req.file);
    req.body['logo']=req.file.path
    // console.log(req.body);
    models.config_store.create(req.body)
    .then(response => {
      // console.log('ini response', response);
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }
  static update(req,res){
    // req.body['logo']=req.file.path
    models.config_store.update(req.body,{
      where:{
        id: req.params.id
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
    models.config_store.destroy({
      where:{
        id: req.params.id
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

module.exports = ConfigStore
