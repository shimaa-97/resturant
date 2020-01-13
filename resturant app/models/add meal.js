const mongoose= require("mongoose");
const schema=mongoose.Schema;

const addmeal=new schema({
    _id:Number,
    img:String,
    mealname:String,
    description:String,
    price:Number,
});

module.exports=mongoose.model("addmeal",addmeal);



