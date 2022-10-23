const router = require("express").Router();
const authController = require("../controllers/aut.controller");
// const UserModel = require('../backend/models/User');

router.post("/register", authController.signUp);

// router.route('/getuser').get((req, res) => {
//     UserModel.find((error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//             console.log(res.json(data))
//         }
//     })
// })
module.exports = router;