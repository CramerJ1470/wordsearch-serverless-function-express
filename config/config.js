const env = "development";

const config = {
	development: {
		dbURL: "https://wordsearch-serverless-function-express.vercel.app/",
		
	},
};

module.exports = config[env];
