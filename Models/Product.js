const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: String,
  description: String,
  category:String,
  link: String,
  img: String,
  discount:Number,
  offerprice:Number,
  price: Number,
  rating: Number,
  reviews:Number
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;