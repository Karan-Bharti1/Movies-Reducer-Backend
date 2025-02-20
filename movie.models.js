const mongoose=require('mongoose')
const MovieSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String
    },
    director:{type:String,
        required:true
    },
    
},{
    timestamps:true,
})
const MovieReducer=mongoose.model("MovieReducer",MovieSchema)
module.exports=MovieReducer