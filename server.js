const express=require("express");
const multer=require("multer");
const app=express();
app.use(express.static("public"));

const upload=multer({dest:"uploads/"});

app.post("/api/intake",upload.single("file"),(req,res)=>{
res.json({message:"ok"});
});

app.listen(3000);