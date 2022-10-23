const UserModel = require('../backend/models/User');

module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const {nom, prenom, email, password} = req.body

  try {
    const user = await UserModel.create({nom, prenom, email, password });
    res.status(201).json({ user: user._id});
  }
  catch(err) {
    res.status(200).send({ err });
  }
}