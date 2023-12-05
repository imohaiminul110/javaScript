// controllers/uploadController.js
const Image = require("./dbModel");
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
}).single('testImage');

const uploadImage = (req, res) => {
    try {
        upload(req, res, (err) => {
            if (err) {
                console.log(err);
            } else {
                const newImage = new Image({
                    name: req.body.name,
                    Image: {
                        data: req.file.filename,
                        contentType: 'image/png'
                    }
                });
                newImage.save()
                    .then(() => res.send("image uploaded"))
                    .catch((err) => console.log(err));
            }
        });
    } catch {
        res.send("something went wrong");
    }
};

module.exports = {
    uploadImage
};
