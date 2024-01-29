const mongoose = require('mongoose');
// Define the User schema
const RoomSchema = new mongoose.Schema({
 roomNumber: {
 type: Number,
 required: true,
 unique:true
 },
 house:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"House"
 },
 allotedTo: {
 type: String,
 required: true,
 },
 createdAt: {
 type: Date,
 default: Date.now,
 },
});
// Create the User model from the schema
const RoomModal = mongoose.model('room', RoomSchema);
module.exports = RoomModal;