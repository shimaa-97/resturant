const express=require("express");
const  bodyparser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");

const addmeal=require("./controllers/meal");
const home=require("./controllers/home");
const order=require("./controllers/order")


const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/Resturant",{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log(err)
    }
    console.log("conect to db...")
})

app.set("view engine","ejs");
app.set("views","./views"); 
app.use(express.static("public"));

app.get('/' ,(req,res)=>{
    res.render('background.ejs')
    
    }) , 
     app.get('/Views/entro.ejs',(req,res)=>{
        res.render('entro.ejs')
        
        }),
        app.get('/Views/login',(req,res)=>{
            res.render('login.ejs')
            
            })
        //     app.get('/action_page.php',(req,res,next)=>{
        //         res.render('./meal/meals.ejs')
        //    })
           app.get('/Views/meals',(req,res,next)=>{
            res.render('./meal/meals.ejs')
       })

app.use("/meal",addmeal)
app.use("/order",order)
app.use("/order/orderlist",(req,res)=>{
    res.render("./order/order-list")
});
app.use("/order/addorder",(req,res)=>{
    res.render("./meal/meal-list")
});



app.use(function(req,resp,next){
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next()
  });

  
app.listen(4000,function(){
    console.log("app is listenning.......")
})