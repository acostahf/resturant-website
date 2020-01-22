var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var wineSchema = new Schema(
  {
    name: { type: String },
    grape: { type: String },
    region: { type: String },
    price: { type: String },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Wine", wineSchema);
