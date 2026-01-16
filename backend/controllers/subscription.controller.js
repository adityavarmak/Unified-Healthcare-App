const Subscription = require("../models/Subscription");

exports.createSubscription = async (req, res) => {
  const { plan } = req.body;

  const prices = {
    basic: 0,
    pro: 499,
    enterprise: 999,
  };

  const subscription = await Subscription.create({
    doctor: req.user.id,
    plan,
    price: prices[plan],
    expiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  });

  res.json({
    message: "Subscription activated",
    subscription,
  });
};
