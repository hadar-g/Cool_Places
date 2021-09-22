const express = require('express');
const app = express();
const cors = require('cors')
const fileUpload = require("express-fileupload")
const morgan = require("morgan")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))



app.use(fileUpload({
    createParentPath: true
  }))

const db = require('./models')

//Routers
const placesRouter = require('./routes/Places')
app.use("/places", placesRouter)

const ImageRouter = require('./routes/Images')
app.use("/images", ImageRouter)



db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("running on port 3001")
    })
})