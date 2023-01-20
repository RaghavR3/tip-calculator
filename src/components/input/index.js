import React from "react";

const Input = ({ bill, setBill, tip, setTip, people, setPeople }) => {
  return (
    <div className="flex flex-col justify-between pr-10">
      <div className="pb-10">
        <h3 className="font-body text-sm text-slate-600 pb-3">Enter Bill $</h3>
        <input
          className="w-full bg-primary-sky-blue rounded-md px-3 py-3 font-body font-bold text-primary-green focus:outline-none"
          placeholder={bill}
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </div>
      <div className="pb-10">
        <h3 className="font-body text-sm text-slate-600 pb-3">Enter tip %</h3>
        <input
          className="w-full bg-primary-sky-blue rounded-md px-3 py-3 font-body font-bold text-primary-green focus:outline-none"
          placeholder={tip}
          onChange={(e) => {
            setTip(e.target.value);
          }}
        />
      </div>
      <div>
        <h3 className="font-body text-sm text-slate-600 pb-3">
          Number of people #
        </h3>
        <input
          className="w-full bg-primary-sky-blue rounded-md px-3 py-3 font-body font-bold text-primary-green focus:outline-none"
          placeholder={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
