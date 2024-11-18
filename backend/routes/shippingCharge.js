const express = require("express");
const data = require("../data/entities.json");
const router = express.Router();

router.get("/", (req, res) => {
  const { warehouseId, customerId, deliverySpeed } = req.query;

  if (!warehouseId || !customerId || !deliverySpeed) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const charge = 150.0; 
  return res.status(200).json({ shippingCharge: charge });
});

module.exports = router;
