var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number },
  sold: {type: Number, default: false}
}, {timestamps: true });


module.exports = mongoose.model('Item', itemSchema);
