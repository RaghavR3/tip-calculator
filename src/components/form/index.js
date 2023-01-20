import React, { useEffect, useState } from "react";
import Calculator from "../calculator";
import Input from "../input";

export default function Form() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(tip);
    const tipAmount = (bill * tip) / 100 / people;
    setTipAmount(Math.round(tipAmount * 100) / 100);

    // to 2 decimal places
    const total = (bill * (1 + tip / 100)) / people;
    setTotal(Math.round(total * 100) / 100);
  }, [bill, tip, people]);

  return (
    <div className="bg-primary-sky-blue flex items-center justify-center">
      <h1 className=" bg-white rounded-xl shadow-lg p-12 grid grid-cols-2">
        <Input
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Calculator tipAmount={tipAmount} totalAmount={total} />
      </h1>
    </div>
  );
}
