var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mainSchema = new Schema(
  {
    name: { type: String },
    price: { type: String },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

var menuSchema = new Schema(
  {
    name: { type: String },
    main: [mainSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Menu", menuSchema);
