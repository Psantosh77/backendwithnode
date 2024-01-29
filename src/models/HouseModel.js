const mongoose = require('mongoose');
// Define the User schema
const Schema = mongoose.Schema;
const HouseSchema = new mongoose.Schema({
 houseName: {
 type: String,
 required: true,
 unique: true,
 },
 address: {
 type: String,
 required: true,
 unique: true,
 },
 room: [{ type: mongoose.Schema.Types.ObjectId, ref: 'room' }] ,
 createdAt: {
 type: Date,
 default: Date.now,
 },
});
// Create the User model from the schema
const HouseModal = mongoose.model('House', HouseSchema);
module.exports = HouseModal;