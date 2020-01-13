const mongoose=require('mongoose');
const schemaa=mongoose.Schema;
const addorder= new schemaa({
  mealname:string,
  
});
module.exports=mongoose.model("addorder",addorder)