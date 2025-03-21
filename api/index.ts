const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/users", (req, res) => res.send("Users on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;