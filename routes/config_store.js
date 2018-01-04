const express = require('express');
const router = express.Router()
const config_store = require('../controllers/config_store');
const upload_image = require('../helper/upload_image');

router.get('/', config_store.findAll)
router.get('/:id', config_store.findOne)
router.post('/', upload_image.single('logo'), config_store.create)
// router.put('/:id', upload_image.single('logo'),config_store.update)
router.put('/:id', upload_image.single('logo'),config_store.update)
router.delete('/:id', config_store.delete)

module.exports = router
