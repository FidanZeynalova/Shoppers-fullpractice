let mongoose = require("mongoose")

mongoose.connect(process.env.url)
    .then(() => {
        console.log("Succes Connected");
    })
    .catch((err) => console.log(err))
