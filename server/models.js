const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/LecturesDB07',  (err)=>{
    console.log("Connected to Mongodb", err);
})

const studentSchema = new mongoose.Schema({
    name: {type:String, minlength: [3, "Name must be at least 3 charaters."]},
    email: {type:String, min:[3, "Email must be at least >=0."]},
    photoUrl: {type: String, minlength: [3, "Image link must be at least 3 characters."]}
}, {timestamps: true});

const instructorSchema = new mongoose.Schema({
    name: {type:String, minlength: [3, "Name must be at least 3 charaters."]},
    email: {type:String, minlength: [3, "Email must be at least 3 characters."]},
    photoUrl: {type: String, minlength: [3, "Image link must be at least 3 characters."]}
}, {timestamps: true});

const commentSchema = new mongoose.Schema({
    name: {type:String, minlength: [3, "Name must be at least 3 charaters."]},
    comment: {type:String, minlength:[3, "Comment must be at least 3 characters."]},
    reference: {type: String, minlength: [3, "Reference must be at least 3 characters."]}
}, {timestamps: true});

const lectureSchema = new mongoose.Schema({
    title: {type:String, minlength: [3, "Title must be at least 3 charaters."]},
    major: {type:String, minlength: [3, "Major must be at least 3 charaters."]},
    photoUrl: {type:String, minlength: [3, "Photo link must be at least 3 charaters."]},
    intro: {type:String, minlength: [3, "Intro must be at least 3 characters."]},
    details: {type: String, minlength: [3, "Detailes must be at least 3 characters."]},
    students: [studentSchema],
    instructors: [instructorSchema],
    comments: [commentSchema]
}, {timestamps: true});

module.exports = mongoose.model("Lecture", lectureSchema);
