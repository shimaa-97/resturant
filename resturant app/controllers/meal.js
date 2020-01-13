const express=require("express");
const  bodyParser=require("body-parser");
const router=express.Router();
const mongoose= require("mongoose");
const addmeal=require("../models/add meal")



router.get("/addmeal",(req,res,next)=>{
    //console.log("hi from addmeal..")
    res.render("./meal/add-meal")
});

router.get("/editmeal",(req,res,next)=>{
    res.render("./meal/edit meal")
})

var parseUrlencoded= bodyParser.urlencoded({extended: true})


router.post("/insert",parseUrlencoded,(req,res,next)=>{
    //console.log(req.body.meal)
    const mealmodel=mongoose.model("addmeal");
    const AddMeal=new mealmodel()
    AddMeal._id=req.body.id
    AddMeal.img=req.body.img
    AddMeal.mealname=req.body.mealname,
    AddMeal.description=req.body.description,
    AddMeal.price=req.body.price,
           
    AddMeal.save((result,error)=>{
        if(error){
            console.log(error)
        }
        console.log("saved..")
        
        res.redirect("/order/addorder")
    })
});

router.post("/edit",(req,res,next)=>{
    const id=req.body.id;
    const updatemenu={
        mealname:req.body.mealname,
        description:req.body.description,
        price:req.body.price
    }
    mongoose.model("addmeal").update({id:id},{$set:updatemenu},(error,result)=>{
        if(error){
            console.log(error)
        }
        console.log(result),
        res.redirect("/addorder")
    })
})

module.exports=router