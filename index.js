const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const upload = multer();
const app = express();
const port = 4000;

app.use(cors());
app.listen(port, () => {
    console.log("up and running on port: " + port);
});
const dbName = "applicantsDB";
const dbConnectionString = "mongodb://localhost:27017/" + dbName;

mongoose.set("strictQuery", false);
mongoose.connect(dbConnectionString);

const applicantSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    email: String,
    school: String,
    major: String,
    gpa: String,
    totalGpa: String,
});

const Applicant = mongoose.model("applicant", applicantSchema);

app.post("/", upload.any(),(request, response) => {
    
    const textData = request.body;
    console.log(textData);
    const applic = new Applicant({
        fullName: textData.fullName,
        phone: textData.phone,
        email: textData.email,
        school: textData.school,
        major: textData.major,
        gpa: textData.major,
        totalGpa: textData.totalGpa
    });

    applic.save();
    response.sendStatus(201);
});