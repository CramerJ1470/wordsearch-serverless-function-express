const router = require("../routes");

module.exports = (app) => {
	app.use("/apisnft/wsboards", router.wsboards);

	app.use("/apisnft/user", router.user);

	app.use("*", (req, res, next) => {
		console.log(req.url);
		res.status(500).json({ error: "Route not matching" });
	});
};
