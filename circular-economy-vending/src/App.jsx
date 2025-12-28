import React, { useState } from "react";
import { identifyMaterial } from "./api/gemini";
import { useWallet } from "./context/WalletContext";
import ImpactDashboard from "./components/ImpactDashboard";
import Wallet from "./components/Wallet";
import VendingShop from "./components/VendingShop";
import RewardsCatalog from "./components/RewardsCatalog";

const App = () => {
  const { addCoins } = useWallet();

  const [impact, setImpact] = useState({
    co2: 0,
    water: 0,
    items: 0,
  });

  const recycleItem = async () => {
    const result = await identifyMaterial();

    addCoins(result.coins);

    setImpact((prev) => ({
      co2: prev.co2 + (result.material === "Plastic" ? 2.5 : 1),
      water: prev.water + 10,
      items: prev.items + 1,
    }));

    alert(`Detected ${result.material} | Earned ${result.coins} coins`);
  };

  return (
    <div className="min-h-screen bg-black p-6 space-y-6">
      <h1 className="text-3xl text-green-400 font-bold">
        AI Circular Economy Vending Machine
      </h1>

      <button
        onClick={recycleItem}
        className="bg-green-600 px-6 py-3 rounded text-white"
      >
        Scan & Recycle Item
      </button>

      <ImpactDashboard impact={impact} />
      <Wallet />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VendingShop />
        <RewardsCatalog />
      </div>
    </div>
  );
};

export default App;
