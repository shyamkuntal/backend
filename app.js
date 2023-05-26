const express = require("express")
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser")

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({ path : "config/config.env"})
}

const register = require("./routes/register")
const s3Upload = require("./controllers/s3Upload")

app.use(cors())
app.use(bodyParser.json())

app.use("/api/v1", register)
app.use("/api/v1", s3Upload)

module.exports = app;

