//1st create schema
const mongoose = require("mongoose");
//2nd
const CakeSchema = mongoose.Schema({
    id: String,
    c_name: String,
    weight: String,
    price: String
});
//3rd
const cakeModel = mongoose.model("cakes", CakeSchema, "cakes");
//4th
module.exports = cakeModel;