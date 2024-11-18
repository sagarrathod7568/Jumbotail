import  { useState } from "react";
import { getShippingCharge } from "../utils/api";

const ShippingChargeEstimator = () => {
  const [warehouseId, setWarehouseId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [deliverySpeed, setDeliverySpeed] = useState("standard");
  const [shippingCharge, setShippingCharge] = useState(null);

  const handleSubmit = async () => {
    const data = await getShippingCharge(
      warehouseId,
      customerId,
      deliverySpeed
    );
    setShippingCharge(data.shippingCharge);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipping Charge Estimator</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Warehouse ID"
          value={warehouseId}
          onChange={(e) => setWarehouseId(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Customer ID"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Delivery Speed</label>
        <select
          value={deliverySpeed}
          onChange={(e) => setDeliverySpeed(e.target.value)}
          className="p-2 border rounded-md w-full"
        >
          <option value="standard">Standard</option>
          <option value="express">Express</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Estimate Shipping Charge
      </button>
      {shippingCharge !== null && (
        <p className="mt-4 text-lg">
          Shipping Charge: <strong>₹{shippingCharge}</strong>
        </p>
      )}
    </div>
  );
};

export default ShippingChargeEstimator;
