import mongoose from "mongoose";

const courseSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    Image:String,
    link:String,
    title:String
})

const Course=mongoose.model("Course",courseSchema);

export default Course;