import React from "react";

const Calculator = ({ tipAmount, totalAmount, setBill, setTip, setPeople }) => {
  return (
    <div className="bg-primary-green flex flex-col justify-start rounded-xl p-10">
      <div className="grid grid-cols-3 pb-10">
        <p className="font-body text-white font-bold">
          Tip Amount <br /> <span className="text-slate-400">/person</span>
        </p>
        <h2 className="col-span-2 flex justify-end text-5xl font-body font-bold text-secondary-green">
          {isNaN(tipAmount) || !isFinite(tipAmount) ? `$0` : `$${tipAmount}`}
        </h2>
      </div>
      <div className="grid grid-cols-3">
        <p className="font-body text-white font-bold">
          Total <br /> <span className="text-slate-400">/person</span>
        </p>
        <h2 className="col-span-2 flex justify-end text-5xl font-body font-bold text-secondary-green">
          {isNaN(totalAmount) || !isFinite(totalAmount)
            ? `$0`
            : `$${totalAmount}`}
        </h2>
      </div>
    </div>
  );
};

export default Calculator;
