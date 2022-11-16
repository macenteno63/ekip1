const EventModel = require("../models/Event");
const UserModel = require("../models/User");
const { uploadErrors } = require("../utils/error");
// Pour vérifier que le praramètre existe dans la base de données
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readEvent = (req, res) => {
  EventModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
    // Afficher du plus récent au plus ancien
  }).sort({ createdAt: -1 });
};

module.exports.createEvent = async (req, res) => {
  let fileName;

  if (req.file !== null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body.posterId + Date.now() + ".jpg";

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../../client/public/uploads/events/${fileName}`
      )
    );
  }

  const newEvent = new EventModel({
    posterId: req.body.posterId,
    titre: req.body.titre,
    date: req.body.date,
    description: req.body.description,
    nbPlaces: req.body.nbPlaces,
    picture: req.file !== null ? "./uploads/events/" + fileName : "",
    inscrits: [],
  });

  try {
    const event = await newEvent.save();
    return res.status(201).json(event);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateEvent = (req, res) => {
  // On contrôle si l'id passé existe
  if (!ObjectID.isValid(req.params.id))
    // Il n'est pas bon on return que l'id passé est incconu
    return res.status(400).send("ID unknown : " + req.params.id);

  // Enregistrement de la mise à jour
  const updatedRecord = {
    titre: req.body.titre,
    date: req.body.date,
    description: req.body.description,
    nbPlaces: req.body.nbPlaces,
  };

  EventModel.findByIdAndUpdate(
    req.params.id,
    // On met à jour le message du event
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deleteEvent = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  // On supprime l'id passé en paramètre
  EventModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};

module.exports.inscrireEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await EventModel.findByIdAndUpdate(
      req.params.id,
      {
        // On ajoute au tableau l'id de la personne qui a liké
        $addToSet: { inscrits: req.body.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        // On ajoute aux inscrites de la personnes
        $addToSet: { inscrites: req.params.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400);
  }
};

module.exports.desinscrireEvent = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await EventModel.findByIdAndUpdate(
      req.params.id,
      {
        // On retire du tableau la personne qui a liké
        $pull: { inscrits: req.body.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        // On retire le like d'une personne
        $pull: { inscrites: req.params.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400);
  }
};