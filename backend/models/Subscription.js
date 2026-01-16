const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  plan: {
    type: String,
    enum: ["basic", "pro", "enterprise"],
    default: "basic",
  },
  price: Number,
  expiry: Date,
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
