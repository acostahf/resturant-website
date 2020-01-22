var express = require("express");
var router = express.Router();
var winesCtrl = require("../../controllers/api/wines");

/* GET /api/wines */
router.get("/", winesCtrl.index);
router.get("/:id", winesCtrl.show);
router.post("/", winesCtrl.create);
router.delete("/:id", winesCtrl.delete);
router.put("/:id", winesCtrl.update);

module.exports = router;
