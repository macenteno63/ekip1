const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");
const uploadController = require('../controllers/upload.controller');
const multer = require('multer');
const upload = multer();


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

// upload
router.post("/upload", upload.single("file"), uploadController.uploadProfil);


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