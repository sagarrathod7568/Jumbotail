import axios from "axios";

const API_URL = "http://localhost:5000/api/v1";

export const getNearestWarehouse = async (sellerId, productId) => {
  const response = await axios.get(
    `${API_URL}/warehouse/nearest?sellerId=${sellerId}&productId=${productId}`
  );
  return response.data;
};

export const getShippingCharge = async (
  warehouseId,
  customerId,
  deliverySpeed
) => {
  const response = await axios.get(
    `${API_URL}/shipping-charge?warehouseId=${warehouseId}&customerId=${customerId}&deliverySpeed=${deliverySpeed}`
  );
  return response.data;
};

export const calculateCharge = async (sellerId, customerId, deliverySpeed) => {
  const response = await axios.post(`${API_URL}/shipping-charge/calculate`, {
    sellerId,
    customerId,
    deliverySpeed,
  });
  return response.data;
};
