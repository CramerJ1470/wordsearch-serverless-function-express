const config=require("./config/config"),dbConnection=require("./config/database"),app=require("express")(),createError=require("http-errors"),path=require("path"),bodyParser=require("body-parser"),cors=require("cors"),{signupValidation:signupValidation,loginValidation:loginValidation}=require("./validation.js"),express=require("express");dbConnection().then(()=>{require("./config/express")(app),require("./config/routes")(app),app.use(express.json()),app.use((function(err,req,res,next){console.error(err),res.status(500).send(err.message),console.log("*".repeat(90))})),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use((err,req,res,next)=>{err.statusCode=err.statusCode||500,err.message=err.message||"Internal Server Error",res.status(err.statusCode).json({message:err.message})}),app.listen(config.port,console.log(`Listening on port ${config.port}!`))}).catch(console.error);