const express  = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
 const hbs = require("hbs");
 hbs.registerPartials(__dirname+"/templates/partials");
const staticPath = path.join(__dirname,"../public");
app.set("view engine","hbs");
app.set("views",__dirname+"/templates/views");
app.use(express.static(staticPath));
app.get("/weather",(req,res)=>{
      res.render("weather");
})
app.get("/home",(req,res)=>{
    res.render("index");
})
app.get("",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
 app.listen(8000,()=>{
    console.log("Listening to 8000");
})