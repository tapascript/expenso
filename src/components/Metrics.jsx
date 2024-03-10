import React from "react";

const Metrics = ({ label, amount }) => {
  return (
    <div className="flex flex-col p-2 border w-1/2 rounded-md border-gray-300 m-3">
      <h2 className="text-xl my-2 font-semibold">{label}</h2>
      <p className="text-3xl"> {new Intl.NumberFormat().format(amount)} USD </p>
    </div>
  );
};

export default Metrics;
