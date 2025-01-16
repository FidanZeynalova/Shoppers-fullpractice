let express = require("express")
const ShoppingController = require("../controller/controller")

let route = express.Router()

route.get("/", ShoppingController.getAllData)
route.get("/:id", ShoppingController.getDataById)
route.post("/", ShoppingController.postData)
route.put("/:id", ShoppingController.editData)
route.delete("/:id", ShoppingController.deleteData)

module.exports = route