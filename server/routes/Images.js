const express = require('express')
const router = express.Router()
//const {Images} = require("../models")
const formidable = require("formidable");
const path = require('path')
const fileUpload = require("express-fileupload")
const morgan = require("morgan")


router.post('/', async (req, res) => {
    try {
        if(!req.files){
          res.send({
            status: false,
            message: "No files"
          })
        } else {
          const {picture} = req.files
    
          picture.mv("./uploads/" + picture.name)
    
          res.send({
            status: true,
            message: "File is uploaded"
          })
        }
      } catch (e) {
        res.status(500).send(e)
      }
})
module.exports = router