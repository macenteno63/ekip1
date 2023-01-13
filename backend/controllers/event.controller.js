const EventModel = require("../models/Event");
const UserModel = require("../models/User");
const { uploadErrors } = require("../utils/error");
// Pour vérifier que le praramètre existe dans la base de données
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");

module.exports.readEvent = (req, res) => {
  EventModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
    // Afficher du plus récent au plus ancien
  }).sort({ createdAt: -1 });
};

module.exports.createEvent = async (req, res) => {
  try {
    if (req.file.mimetype !== "image/jpg" && req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpeg")
      throw Error("invalid file");

    if (req.file.size > 500000) throw Error("max size");
  } catch (err) {
    const errors = uploadErrors(err);
    return res.status(201).json({errors});
  }
  const fileName = req.body.posterId + "____" + Date.now() + ".jpg";
    let writeStream = fs.createWriteStream(`${__dirname}/../../public/event/${fileName}`);
    writeStream.write(req.file.buffer);
    writeStream.on('finish', () => {
        console.log('Fichier mis à jour !');
    });
    writeStream.end();

  const newEvent = new EventModel({
    posterId: req.body.posterId,
    titre: req.body.titre,
    date: req.body.date,
    description: req.body.description,
    nbPlaces: req.body.nbPlaces,
    picture: fileName,
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
        req.body.id,
        { $set : {picture: "assets/events/" + fileName}},
        { new: true, upsert: true, setDefaultsOnInsert: true},
        (err, docs) => {
          if (!err)
            return res.send(docs);
          else
            return res.status(500).send({ message: err });
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

module.exports.readEventById = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  EventModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown : " + err);
  });
};