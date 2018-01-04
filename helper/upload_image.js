const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

var storage = multer.diskStorage({
  destination: './upload/images',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)
      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({
  storage:storage,
  limits: {fileSize: 5 * 1024 * 1024}
})
module.exports = upload
