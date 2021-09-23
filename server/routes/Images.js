const express = require('express')
const router = express.Router()
//const {Images} = require("../models")
const formidable = require("formidable");
const path = require('path')
const multer = require('multer')
const upload = multer({dest:'uplodads/'})

router.post('/', upload.single('image'), async (req, res) => {
   const file = req.file
   const description = req.body.description
   const filename = file.filename
   res.json(filename)
   console.log(file.filename)
})
module.exports = router