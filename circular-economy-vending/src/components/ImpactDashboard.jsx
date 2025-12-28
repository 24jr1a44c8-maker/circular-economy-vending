import React from "react";

const ImpactDashboard = ({ impact }) => {
  return (
    <div className="bg-slate-900 p-6 rounded-xl text-white">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Environmental Impact
      </h2>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-slate-800 p-4 rounded-lg">
          🌍
          <p className="text-xl">{impact.co2} kg</p>
          <p className="text-sm text-slate-400">CO₂ Reduced</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          💧
          <p className="text-xl">{impact.water} L</p>
          <p className="text-sm text-slate-400">Water Saved</p>
        </div>

        <div className="bg-slate-800 p-4 rounded-lg">
          ♻️
          <p className="text-xl">{impact.items}</p>
          <p className="text-sm text-slate-400">Items Recycled</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactDashboard;
