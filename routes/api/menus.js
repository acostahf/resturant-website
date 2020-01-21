var express = require("express");
var router = express.Router();
var menusCtrl = require("../../controllers/api/menus");

/* GET /api/menus */
router.get("/", menusCtrl.index);
router.get("/:id", menusCtrl.show);
router.post("/", menusCtrl.create);
router.delete("/:id", menusCtrl.delete);
router.put("/:id", menusCtrl.update);

module.exports = router;
