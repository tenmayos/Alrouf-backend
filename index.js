const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer();
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
//app.use(bodyParser.json());
app.listen(port, () => {
    console.log("up and running on port: " + port);
});



app.post("/", upload.any(),(request, response) => {
    console.log(request.files[0]);
    response.sendStatus(201);
})