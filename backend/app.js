const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const warehouseRoutes = require("./routes/warehouse");
const shippingChargeRoutes = require("./routes/shippingCharge");
const calculateChargeRoutes = require("./routes/calculateCharge");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/warehouse", warehouseRoutes);
app.use("/api/v1/shipping-charge", shippingChargeRoutes);
app.use("/api/v1/shipping-charge/calculate", calculateChargeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
