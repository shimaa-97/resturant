const express=require("express");
const router=express.Router();
const mongoose=require('mongoose');
const ejs =require("ejs")
const  bodyParser=require("body-parser");
var BodyParser=bodyParser.urlencoded({extended:true})

router.get("/addorder",(req,res)=>{
    // res.render("./order/order-list")
    // console.log("hi from order list")
    
    mongoose.model("addmeal").find((error,data)=>{
        if(error){
            console.log(error);
                   }
         console.log("done!");
     res.render('./meal/meal-list',{ addmeals : data})
    })
});

router.post("/orderlist",(req,res)=>{
    const ordermodule=mongoose.model("addorder")
    const Neworder=new ordermodule()
    Neworder.mealname=req.body.check,

    Neworder.save((err,result)=>{
        if (err){
            console.log(err)
        }
        console.log(result)
        res.render("./meal/meal-list")
    })
})


module.exports=router