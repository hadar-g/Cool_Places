const express = require('express');
const app = express();
const cors = require('cors')



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


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


