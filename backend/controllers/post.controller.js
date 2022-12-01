const PostModel = require("../models/Post");
const UserModel = require("../models/User");
const { uploadErrors } = require("../utils/error");
// Pour vérifier que le praramètre existe dans la base de données
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
//const pipeline = promisify(require("stream").pipeline);

module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
    // Afficher du plus récent au plus ancien
  }).sort({ createdAt: -1 });
};

module.exports.createPost = async (req, res) => {
  // let fileName;
  // console.log(req.file.mimetype);
  // if (req.file !== null) {
  //   try {
  //     if (
  //       req.file.mimetype !== "image/jpg" &&
  //       req.file.mimetype !== "image/png" &&
  //       req.file.mimetype !== "image/jpeg"
  //     )
  //       throw Error("invalid file");
  //
  //     if (req.file.size > 500000) throw Error("max size");
  //   } catch (err) {
  //     const errors = uploadErrors(err);
  //     return res.status(201).json({ errors });
  //   }
    // const tempPath = req.file.path;
    // fileName = req.body.posterId + Date.now() + ".jpg";
    // const targetPath = req.file.path.join(__dirname, "../../client/public/uploads/posts/" + fileName);
    // fs.rename(tempPath, targetPath, err => {
    //   if (err)
    // });

    // await pipeline(
    //   req.file.stream,
    //   fs.createWriteStream(
    //     `${__dirname}/../../client/public/uploads/posts/${fileName}`
    //   )
    // );

  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
}
// picture: req.file !== null ? "./uploads/posts/" + fileName : "",

module.exports.updatePost = (req, res) => {
  // On contrôle si l'id passé existe
  if (!ObjectID.isValid(req.params.id))
    // Il n'est pas bon on return que l'id passé est incconu
    return res.status(400).send("ID unknown : " + req.params.id);

  // Enregistrement de la mise à jour
  const updatedRecord = {
    message: req.body.message,
  };

  PostModel.findByIdAndUpdate(
    req.params.id,
    // On met à jour le message du post
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
};

module.exports.deletePost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  // On supprime l'id passé en paramètre
  PostModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
};

module.exports.likePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        // On ajoute au tableau l'id de la personne qui a liké
        $addToSet: { likers: req.body.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        // On ajoute aux likes de la personnes
        $addToSet: { likes: req.params.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400);
  }
};

module.exports.unlikePost = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        // On retire du tableau la personne qui a liké
        $pull: { likers: req.body.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));

    await UserModel.findByIdAndUpdate(
      req.body.id,
      {
        // On retire le like d'une personne
        $pull: { likes: req.params.id },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400);
  }
};

module.exports.commentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    // On récupère l'id du post
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        // On ajoute le commentaire
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            nom: req.body.nom,
            text: req.body.text,
            // Savoir quand il a été posté
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.editCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    // Chercher un commentaire parmi un poste donné
    return PostModel.findById(req.params.id, (err, docs) => {
      // Commentaire à éditer
      const theComment = docs.comments.find((comment) =>
        comment._id.equals(req.body.commentId)
      );

      if (!theComment) return res.status(404).send("Comment not found");
      theComment.text = req.body.text;

      return docs.save((err) => {
        if (!err) return res.status(200).send(docs);
        return res.status(500).send(err);
      });
    });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deleteCommentPost = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return PostModel.findByIdAndUpdate(
      req.params.id,
      {
        // On ve retirer le commentaire d'un post de par son id
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true })
      .then((data) => res.send(data))
      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(400).send(err);
  }
};