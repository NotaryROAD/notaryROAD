const port = process.env.PORT || 5000; //Line 3
var { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  },
  region: "us-1",
  endpoint: "https://gateway.storjshare.io",
});
require("dotenv").config();
var express = require("express");
// var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const app = express(); //Line 2
app.use(cors({ origin: "http://localhost:3000/meeting" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11
app.post("/presign", async function (req, res, next) {
    try {
      let params = {
        Bucket: "notary-bucket",
        Key: req.body.key,
      };
  
      let command = new PutObjectCommand(params);
      const signedUrl = await getSignedUrl(s3Client, command, {
        expiresIn: 3600,
      });
      res.json({ url: signedUrl });
    } catch (err) {
      console.error(err);
    }
  });


module.exports = app;