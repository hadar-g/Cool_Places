const express = require('express')
const router = express.Router()
//const {Images} = require("../models")
const formidable = require("formidable");
const path = require('path')
const multer = require('multer')
const upload = multer({dest:'uplodads/'})
const {uploadFile, getFileStream } = require('../s3')

router.post('/', upload.single('image'), async (req, res) => {
   const file = req.file
   const description = req.body.description
   const filename = file.filename
   const result = await uploadFile(file)
   console.log(result)
   
   
  //  res.json(filename)
  res.send({imagePath: `/:${result.Key}`})
   
})

router.get('/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)

})


module.exports = router