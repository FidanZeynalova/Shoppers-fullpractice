let express = require("express")
const ShopperModel = require("../model/model")
let app = express()
app.use(express.json())

let ShoppingController = ({
    getAllData: async (req, res) => {
        let datas = await ShopperModel.find()
        res.send(datas)
    },
    getDataById: async (req, res) => {
        let { id } = req.params
        let data = await ShopperModel.findById(id)
        res.send(data)
    },
    postData: async (req, res) => {
        let newData = ShopperModel(req.body)
        await newData.save()
        res.send({
            message: "Succes Post",
            data: req.body
        })
    },
    editData: async (req, res) => {
        let { id } = req.params
        let edit = req.body
        let edited = await ShopperModel.findByIdAndUpdate(id, edit, { new: true })
        res.send(edited)
    },
    deleteData: async (req, res) => {
        let { id } = req.params
        await ShopperModel.findByIdAndDelete(id)
        res.send({
            message: "Succes Delete"
        })
    }
})

module.exports = ShoppingController