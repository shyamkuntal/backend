const AWS = require("aws-sdk")
const multer = require("multer")
const express = require("express");
const router = express.Router();


const bucketName = process.env.bucketName;

const awsConfig = {
    accessKeyId: process.env.AccessKey,
    secretAccessKey: process.env.SecretKey,
    region: process.env.region,
};

const S3 = new AWS.S3(awsConfig);

//Specify the multer config
let upload = multer({
    // storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: function (req, file, done) {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg"
        ) {
            done(null, true);
        } else {
            //prevent the upload
            var newError = new Error("File type is incorrect");
            newError.name = "MulterError";
            done(newError, false);
        }
    },
});


//upload to s3
const uploadToS3 = (fileData) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: bucketName,
            Key: `${Date.now().toString()}.jpg`,
            Body: fileData,
        };
        S3.upload(params, (err, data) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            console.log(data);
            return resolve(data);
        });
    });
};

const uploadImg =  async (req, res) => {
     upload.single("image")
    // const img = await new User(req.body);
    console.log(req.body.file);
    if (req.file) {
        await uploadToS3(req.file.buffer);
    }

    res.send({
        msg: "Image uploaded succesfully",

    });
}
//upload single image to s3
router.route("/upload").post(upload.single("image"),uploadImg);


module.exports = router;

// app.listen(PORT, () => console.log("server is running on " + PORT));