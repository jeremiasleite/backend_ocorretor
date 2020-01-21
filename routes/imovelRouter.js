const router = require("express").Router();
const authMiddleware = require("../middlewares/auth");
const imovelController = require("../controllers/imovelController")

//Url: /api/user
router.get("/", imovelController.buscarTodos);
router.get("/:imovelId", imovelController.buscarId);


//router.use(authMiddleware);

router.post("/", imovelController.inserir)

module.exports = router;