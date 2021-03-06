const mongoose = require("mongoose");

const courierOrderSchema = new mongoose.Schema({
  cafe: {
    type: String,
    required: true,
  },
  basket: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  sales: Number,
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  email: String,
  phoneOfCourier: Number,
  date: Date,
});

module.exports = mongoose.model("CourierOrder", courierOrderSchema);
