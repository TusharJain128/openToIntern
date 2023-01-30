const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const route = require("./routes/route")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://TusharJainFunctionup:functionup@tusharjaindb.zxey2fj.mongodb.net/test")
      .then(() => console.log("My DB is connected"))
      .catch((err) => console.error(err))

app.use("/functionup", route)

app.all("/*",  (req, res) =>  {
      res.status(404).send({
            status: false,
            message: "This page is not exist"
      })
})



app.listen(3000, () => {
      console.error("Express app running on port 3000");
})



