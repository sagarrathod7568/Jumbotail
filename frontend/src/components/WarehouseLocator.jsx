import { useState } from "react";
import { getNearestWarehouse } from "../utils/api";

const WarehouseLocator = () => {
  const [sellerId, setSellerId] = useState("");
  const [productId, setProductId] = useState("");
  const [warehouse, setWarehouse] = useState(null);

  const handleSubmit = async () => {
    const data = await getNearestWarehouse(sellerId, productId);
    setWarehouse(data);
  };

  return (
    <div className="p-4 border rounded-md shadow-md ">
      <h2>Find Nearest Warehouse</h2>
      <input
        className="p-2 my-2 border rounded-md w-full"
        type="text"
        placeholder="Seller ID"
        value={sellerId}
        onChange={(e) => setSellerId(e.target.value)}
      />
      <input
        className="p-2 border rounded-md w-full"
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
        onClick={handleSubmit}
      >
        Find
      </button>
      {warehouse && <pre>{JSON.stringify(warehouse, null, 2)}</pre>}
    </div>
  );
};

export default WarehouseLocator;
