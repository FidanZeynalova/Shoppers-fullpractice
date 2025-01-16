const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const  route  = require("./routes/routes")

app.use(express.json())
app.use(cors())
dotenv.config()

require("./config/config")
app.use("/shop", route)

app.listen(process.env.port, () => {
    console.log(("Listen 5050"));
})