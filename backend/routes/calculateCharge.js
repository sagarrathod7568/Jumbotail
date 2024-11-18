const express = require("express");
const data = require("../data/entities.json");
const router = express.Router();

router.post("/", (req, res) => {
  const { sellerId, customerId, deliverySpeed } = req.body;

  if (!sellerId || !customerId || !deliverySpeed) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const nearestWarehouse = data.warehouses[0]; 
  const shippingCharge = 180.0; 

  return res.status(200).json({
    shippingCharge,
    nearestWarehouse,
  });
});

module.exports = router;
