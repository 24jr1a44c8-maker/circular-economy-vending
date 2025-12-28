import React from "react";
import { useWallet } from "../context/WalletContext";

const Wallet = () => {
  const { coins, inr } = useWallet();

  const cashOut = () => {
    alert(`Mock UPI transfer of ₹${inr.toFixed(2)} initiated`);
  };

  return (
    <div className="bg-slate-800 p-4 rounded-lg text-white">
      <h3 className="text-lg font-bold mb-2">Digital Wallet</h3>
      <p>Eco-Coins: {coins}</p>
      <p>INR Value: ₹{inr.toFixed(2)}</p>

      <button
        onClick={cashOut}
        className="mt-3 bg-green-500 px-4 py-2 rounded"
      >
        Cash Out via UPI
      </button>
    </div>
  );
};

export default Wallet;
