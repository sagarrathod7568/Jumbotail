import { useState } from "react";
import { calculateCharge } from "../utils/api";

const ChargeCalculator = () => {
  const [sellerId, setSellerId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [deliverySpeed, setDeliverySpeed] = useState("standard");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    const data = await calculateCharge(sellerId, customerId, deliverySpeed);
    setResult(data);
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Charge Calculator</h2>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Seller ID"
          value={sellerId}
          onChange={(e) => setSellerId(e.target.value)}
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
        onClick={handleCalculate}
        className="bg-green-500 text-white py-2 px-4 rounded-md"
      >
        Calculate Charge
      </button>
      {result && (
        <div className="mt-4">
          <p className="text-lg">
            Shipping Charge: <strong>₹{result.shippingCharge}</strong>
          </p>
          <p className="text-lg mt-2">
            Nearest Warehouse:
            <br />
            <strong>ID:{result.nearestWarehouse.warehouseId}</strong>
            <br />
            <strong>
              Location:
              {JSON.stringify(result.nearestWarehouse.warehouseLocation)}
            </strong>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChargeCalculator;
