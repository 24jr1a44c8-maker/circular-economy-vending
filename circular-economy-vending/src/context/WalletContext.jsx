import React, { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [coins, setCoins] = useState(0);
  const [inr, setInr] = useState(0);

  const addCoins = (amount) => {
    setCoins((prev) => prev + amount);
    setInr((prev) => prev + amount * 0.1); // 10 coins = ₹1
  };

  const spendCoins = (amount) => {
    if (coins >= amount) {
      setCoins(coins - amount);
      setInr(inr - amount * 0.1);
      return true;
    }
    return false;
  };

  return (
    <WalletContext.Provider value={{ coins, inr, addCoins, spendCoins }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
