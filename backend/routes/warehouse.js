const express = require("express");
const data = require("../data/entities.json");
const router = express.Router();

router.get("/nearest", (req, res) => {
  const { sellerId, productId } = req.query;

  if (!sellerId || !productId) {
    return res.status(400).json({ error: "Missing sellerId or productId" });
  }

  const warehouse = data.warehouses[0]; 
  return res.status(200).json({
    warehouseId: warehouse.id,
    warehouseLocation: warehouse.location,
  });
});

module.exports = router;
