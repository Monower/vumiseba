import React from "react";

export default function Submit({ value }) {
  return (
    <div className="text-center mt-2">
        <button className="bg-green1 text-slate-50 px-4 py-1 rounded">{value}</button>
    </div>
  );
}
