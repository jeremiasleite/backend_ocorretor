const router = require("express").Router();
const authMiddleware = require("../middlewares/auth");
const userController = require("../controllers/userController")

//Url: /api/user
router.get("/", userController.teste);
router.post("/authenticate", userController.authenticate)
router.post("/register", userController.register)


router.use(authMiddleware);

router.get("/me", userController.me)

module.exports = router;