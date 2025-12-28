import React from "react";
import { useWallet } from "../context/WalletContext";

const rewards = [
  { name: "Amazon ₹100 Voucher", cost: 1000 },
  { name: "Swiggy ₹50 Voucher", cost: 500 },
];

const RewardsCatalog = () => {
  const { spendCoins } = useWallet();

  const redeem = (cost, name) => {
    if (spendCoins(cost)) {
      alert(`${name} redeemed successfully`);
    } else {
      alert("Not enough coins");
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white">
      <h2 className="text-xl font-bold mb-4">Rewards Catalog</h2>

      {rewards.map((r) => (
        <div key={r.name} className="flex justify-between mb-2">
          <span>{r.name}</span>
          <button
            className="bg-purple-500 px-3 py-1 rounded"
            onClick={() => redeem(r.cost, r.name)}
          >
            Redeem
          </button>
        </div>
      ))}
    </div>
  );
};

export default RewardsCatalog;
