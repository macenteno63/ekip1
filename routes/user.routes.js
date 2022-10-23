const router = require("express").Router();
const authController = require("../controllers/aut.controller");
const userController = require("../controllers/userController");
// const UserModel = require('../backend/models/User');
//auth
router.post("/register", authController.signUp);
// user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
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