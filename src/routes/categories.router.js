const router = require("express").Router();
const categoryCtrl = require("../controllers/categories.controller");
router.get("/get-all", categoryCtrl.getAllCategory);
router.post("/create-categories", categoryCtrl.createCategory);
router.delete("/:id", categoryCtrl.createCategory);
module.exports = router;
