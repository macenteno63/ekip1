const UserModel = require("../models/User");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/error");

module.exports.uploadProfil = async (req, res) => {
  try {
    // On accepte seulement ces trois format d'image
    if (
      req.file.detectedMimeType != "image/jpg" &&
      req.file.detectedMimeType != "image/png" &&
      req.file.detectedMimeType != "image/jpeg"
    )
      throw Error("invalid file");

    // Si la taille est supérieur à 500mo on accepte pas et on renvoie une erreur
    if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({ errors });
  }

  // Quel sera le com de l'image
  const fileName = req.body.name + ".jpg";

  await pipeline(
    req.file.stream,
    fs.createWriteStream(
      // On lui passe le chemin à créer pour l'image
      `${__dirname}/../../client/public/uploads/profil/${fileName}`
    )
  );

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
        { $set: { picture: "./uploads/profil/" + fileName } },
        { new: true, upsert: true, setDefaultsOnInsert: true })
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ message: err }));
        
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};