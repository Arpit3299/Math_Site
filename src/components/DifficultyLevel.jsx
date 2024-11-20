import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DifficultyLevel = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const selectLevel = (level) => {
    navigate("/quiz", { state: { ...state, level } });
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="border-4 border-slate-950 p-12">
        <h1 className="text-2xl font-bold mb-6">Select Difficulty Level</h1>
        <div className="m-auto">
          {["Easy", "Medium", "Hard"].map((level) => (
            <div className=" m-8 ">
              <button
                key={level}
                onClick={() => selectLevel(level)}
                className="bg-green-500 text-white px-4 py-2 rounded w-[200px]"
              >
                {level}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifficultyLevel;
