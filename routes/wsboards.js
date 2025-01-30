const controllers = require("../controllers");
const router = require("express").Router();
const bodyParser = require("body-parser");
const { auth } = require("../utils");

router.get("/", controllers.wsboards.get);

router.post("/", auth(), controllers.wsboards.post);

// router.put("/:id", auth(), controllers.wsboards.put);

// router.delete("/:id", auth(), controllers.wsboards.delete);

module.exports = router;
