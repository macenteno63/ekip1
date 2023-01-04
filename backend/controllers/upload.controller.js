const UserModel = require("../models/User");
const fs = require("fs");
const { uploadErrors } = require("../utils/error");

module.exports.uploadProfil = async (req, res) => {
  try {
    if (req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpeg")
      throw Error("invalid file");

    if (req.file.size > 100000000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({errors});
  }
    const fileName = req.body.name + ".jpg";
    let writeStream = fs.createWriteStream(`${__dirname}/../../src/assets/profil/${fileName}`);
    writeStream.write(req.file.buffer);
    writeStream.on('finish', () => {
        console.log('Fichier mis à jour !');
    });
    writeStream.end();

  try {
    await UserModel.findByIdAndUpdate(
        req.body.userId,
        { $set : {picture: "assets/profil/" + fileName}},
        { new: true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) => {
          if (!err)
            return res.send(docs);
          else
            return res.status(500).send({ message: err });
        }
    );
  } catch (err) {
    console.log(err);
    //return res.status(500).send({ message: err });
  }
};

