import React from "react";

function FeatureCard({ IconComponent, title, body }) {
  return (
    <div className="w-full rounded-lg border border-gray-400 bg-slate-400 p-6 shadow-sm transition-all hover:border-[#1d3673]">
      <IconComponent />
      <h3 className="mt-4 text-lg font-semibold text-[#1d3673]">{title}</h3>
      <p className="mt-2 text-gray-500">{body}</p>
    </div>
  );
}

export default FeatureCard;
