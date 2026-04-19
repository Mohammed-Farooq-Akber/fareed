const express=require("express");
const multer=require("multer");
const fs=require("fs");
const app=express();
app.use(express.static("public"));

if(!fs.existsSync("uploads")) fs.mkdirSync("uploads");

const upload=multer({dest:"uploads/"});

app.post("/api/intake",upload.single("file"),(req,res)=>{
res.json({message:"ok"});
});

app.listen(process.env.PORT||3000);