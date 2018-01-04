const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config()

app.use(express.static('images'))

app.use(cors())

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('server')
  // res.sendFile(__dirname + '/index.html');
})

const config_user= require('./routes/config_user');
const config_store= require('./routes/config_store');
const config_account_code= require('./routes/config_account_code');
const config_group_code= require('./routes/config_group_code');
const config_type_code= require('./routes/config_type_code');
const general_ledger= require('./routes/general_ledger');
const general_ledger_detail= require('./routes/general_ledger_detail');
const general_ledger_book= require('./routes/general_ledger_book');
const general_ledger_book_detail= require('./routes/general_ledger_book_detail');

app.use('/config_user', config_user)
app.use('/config_store', config_store)
app.use('/config_account_code', config_account_code)
app.use('/config_group_code', config_group_code)
app.use('/config_type_code', config_type_code)
app.use('/general_ledger', general_ledger)
app.use('/general_ledger_detail', general_ledger_detail)
app.use('/general_ledger_book', general_ledger_book)
app.use('/general_ledger_book_detail', general_ledger_book_detail)

module.exports = app
