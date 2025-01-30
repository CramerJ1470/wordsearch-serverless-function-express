const models = require("../models");

module.exports = {
	get: (req, res, next) => {
		models.WsBoard.find()
			.then((wsboard) => res.send(wsboardobject))
			.catch(next);
	},
	post: (req, res, next) => {
		const {
			grid,
			words
		} = req.body;
		const { _id } = req.user;

		models.WsBoard.create({
			grid,
			words
		})
			.then((createdWsBoardObject) => {
				return Promise.all([
					models.WsBoardObject.updateOne(
						{ _id },
						{ $push: { wsboard: createdWsBoardObject } }
					),
					models.WsBoardObject.findOne({ _id: createdWsBoardObject._id }),
				]);
			})
			.then(([modifiedObj, wsBoardObjectObj]) => {
				res.send(wsBoardObjectObj);
			})
			.catch(next);
	},

};
