// import React from "react";
// import { useNavigate } from "react-router-dom";

// const QuestionType = () => {
//   const navigate = useNavigate();

//   const selectType = (type) => {
//     navigate("/difficulty-level", { state: { type } });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Select Question Type</h1>
//       <div className="flex gap-4">
//         {["+", "-", "*", "/"].map((type) => (
//           <button
//             key={type}
//             onClick={() => selectType(type)}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             {type}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuestionType;

import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionType = () => {
  const navigate = useNavigate();

  const selectType = (type) => {
    navigate("/difficulty-level", { state: { type } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Select Question Type
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {["+", "-", "*", "/"].map((type) => (
          <button
            key={type}
            onClick={() => selectType(type)}
            className="bg-blue-600 text-white text-xl px-8 py-4 rounded-md transition transform duration-300 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionType;
