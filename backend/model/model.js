const mongoose = require("mongoose")

let ShopperSchema = new mongoose.Schema({
    img:String,
    name:String,
    price:Number
})

let ShopperModel = mongoose.model("shop",ShopperSchema)

module.exports = ShopperModel