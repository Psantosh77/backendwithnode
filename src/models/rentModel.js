const mongoose = require('mongoose');
// Define the User schema
const Schema = mongoose.Schema;
const RentSchema = new mongoose.Schema({
 roomNumber: {
 type: Number,
 required: true,
 },
 generateDate: {
    type: Date,
    default: Date.now,
    },
billMonth:{
    type: String,
    required:true
},
start:{
    type:Number,
    required:true
},
end:{
    type:Number,
    required:true
},
unit:{
    type:Number,
    required:false
},
totalBill:{
    type:Number,
    required:false
},
roomRent:{
    type:Number,
    required:false
},
total:{
    type:Number,
    required:false
},

prevAdvance:{
    type:Number,
    required:false
},
prevBalance:{
    type:Number,
    required:false
},
grandtotal:{
    type:Number,
    required:false
},
paid:{
    type:Number,
    required:false
},
paidOn:{
    type:String,
    required:false
},
nextBalance:{
    type:Number,
    required:false
},
nextAdvance:{
    type:Number,
    required:false
},
status:{
    type:String,
    required:false
},
remark:{
    type:String,
    required:false
},
 createdAt: {
 type: Date,
 default: Date.now,
 },
});
// Create the User model from the schema
const RentModal = mongoose.model('Rent', RentSchema);
module.exports = RentModal;