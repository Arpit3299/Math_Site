import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const retry = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="border-4 border-slate-950 p-12 bg-[#fde68a]">
        <h1 className="text-3xl font-bold mb-6">
          {state.score > 40 ? (
            <div> Congrats !! You got {state.score} out of 100 </div>
          ) : (
            "Try Again!"
          )}
        </h1>
        <button
          onClick={retry}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          {state.score > 40 ? <div>Attempt New Quiz </div> : "Try Again!"}
        </button>
      </div>
    </div>
  );
};

export default Result;
