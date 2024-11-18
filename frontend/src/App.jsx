// import React from "react";
import Header from "./components/Header";
import WarehouseLocator from "./components/WarehouseLocator";
import ShippingChargeEstimator from "./components/ShippingChargeEstimator";
import ChargeCalculator from "./components/ChargeCalculator";

const App = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <WarehouseLocator />
        <hr className="my-4" />
        <ShippingChargeEstimator />
        <hr className="my-4" />
        <ChargeCalculator />
      </main>
    </div>
  );
};

export default App;
