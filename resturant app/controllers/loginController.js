router=require("express").Router()



 router.post("/login"),ParseUrlencoded,(req,res,next)=>{

var new_user=new UserModel()
new_user.name=req.body.name
new_user.password=req.body.password;
mongoose.model("user").find({ 
   "name":req.body.name,
   "password":req.body.password} ,(function(err,data){
        if (data.length===0){
res.send(" you are not admin ")}
        else{
res.redirect("/order/addorder")

        }
   }) 
)


}

module.exports= logincontroller