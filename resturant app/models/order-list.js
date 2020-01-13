const mongoose= require("mongoose");
var schema=mongoose.Schema;
var listorder=new schema({
    orderNumber:Number,

})
mongoose.model("listorder",listorder);