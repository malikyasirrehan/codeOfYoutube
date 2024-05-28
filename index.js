require('dotenv').config()
const express=require("express")
const app=express()

const port=4000
app.get("/",(req,res)=>{
    res.send("hello word")
    console.log("consoler log");

})
app.listen(process.env.PORT,()=>{
console.log(`Exmple app listening on port ${port}`);

})
app.get('/login',(req,res)=>{
    res.send("<h1> Please login at chai ande code")
})