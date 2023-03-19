const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ObjectId =Schema.ObjectId;

const carModels = new Schema({
    id:ObjectId,
    name:{type:String,required:true},
    manufacturer:{type:String,required:true},
    color:{type:String,required:true},
    price:{type:Number,required:true},
})

module.exports = mongoose.model('carModels',carModels,'carModels')