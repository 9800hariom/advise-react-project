import React, { useEffect, useState } from "react";
import { FaDiceSix } from "react-icons/fa";

const Body = () => {
  const [advice, setAdvice] = useState("");

  const handleAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();
    const { slip } = jsonData;
    setAdvice(slip.advice);
  };

  useEffect(() => {
    handleAdvice(); // Fetch advice when the component mounts
  }, []);

  return (
    <div className="h-screen bg-slate-800 flex justify-center items-center">
      <div className="bg-slate-600 h-[168px] w-[320px] rounded-lg p-6">
        <p className="text-center text-xl">Advice</p>
        <p className="font-bold text-3xl mt-2">"{advice}"</p>
        <div className="flex justify-center m-2">
          <button onClick={handleAdvice} className="bg-lime-400 p-4 rounded-full">
            <FaDiceSix />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
