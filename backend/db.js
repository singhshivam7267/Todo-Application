/**
 Todo{
    title:string,
    descrription: string,
    compleated: boolean
 }
 */

 const mongoose = require("mongoose");
 //mongodb url : mongodb+srv://singhshivam7267:Kshtriya%40123@ss.gks2pro.mongodb.net/
 //.env 
 mongoose.connect("mongodb+srv://singhshivam7267:Kshtriya%40123@ss.gks2pro.mongodb.net/")

 const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    compleated: Boolean
 })

 const todo = mongoose.model('todos',todoSchema);

 module.exports ={
    todo
 }