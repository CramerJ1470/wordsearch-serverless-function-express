const controllers = require("../controllers");
const router = require("express").Router();
const bodyParser = require("body-parser");
const { auth } = require("../utils");

router.get("/", controllers.wsboards.get);

router.post("/", auth(), controllers.wsboards.post);

// router.put("/:id", auth(), controllers.movie.put);

// router.delete("/:id", auth(), controllers.movie.delete);

module.exports = router;
