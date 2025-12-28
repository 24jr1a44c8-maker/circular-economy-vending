import React from "react";
import { useWallet } from "../context/WalletContext";

const products = [
  { name: "Chips", price: 20 },
  { name: "Drink", price: 30 },
];

const VendingShop = () => {
  const { spendCoins } = useWallet();

  const buyItem = (price) => {
    const discount = 5;
    const success = spendCoins(discount);

    if (success) {
      alert(`Item purchased with ₹${discount} discount`);
    } else {
      alert("Not enough coins");
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white">
      <h2 className="text-xl font-bold mb-4">Vending Shop</h2>

      {products.map((item) => (
        <div key={item.name} className="flex justify-between mb-2">
          <span>{item.name} – ₹{item.price}</span>
          <button
            className="bg-blue-500 px-3 py-1 rounded"
            onClick={() => buyItem(item.price)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default VendingShop;
