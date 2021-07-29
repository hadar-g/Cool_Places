const express = require('express')
const router = express.Router()
const {Places} = require("../models")

router.get('/', async (req, res) => {
    const listOfPosts = await Places.findAll()
    res.json(listOfPosts)

})

router.post('/', async (req, res) => {
    const place = req.body  
    await Places.create(place)
    res.json(place)
})

module.exports = router