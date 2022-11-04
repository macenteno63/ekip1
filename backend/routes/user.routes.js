const router = require("express").Router();
const authController = require("../controllers/aut.controller");
const userController = require("../controllers/userController");
// const UserModel = require('../backend/models/User');
//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get("/all", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

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