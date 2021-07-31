const express = require('express')
const router = express.Router()
const {Images} = require("../models")


router.post('/', async (req, res) => {
    var form = new formidable.IncomingForm()
    form.multiples = true
    form.uploadDir = path.join(_dirname, '../../../Images')
    form.on('error', function(err) {
        errorLogger.error('During file upload: ' + err);
      });
  
      // once all the files have been uploaded, send a response to the client
      form.on('end', function() {
        res.end('success');
      });
  
      // parse the incoming request containing the form data
      form.parse(req);
})

module.exports = router