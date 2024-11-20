// import { Link } from "react-router-dom";

// const QuestionLevel = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
//         <Link to="/question-level/easy">Easy</Link>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
//         <Link to="/question-level/medium">Medium</Link>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
//         <Link to="/question-level/hard">Hard</Link>
//       </div>
//     </div>
//   );
// };

// export default QuestionLevel;
import { Link } from "react-router-dom";
import Header from "./Header";
const QuestionLevel = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
          <Link
            to="/question-level/easy"
            className="text-blue-500 hover:underline"
          >
            Easy
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
          <Link
            to="/question-level/medium"
            className="text-blue-500 hover:underline"
          >
            Medium
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md w-40 my-4 text-center">
          <Link
            to="/question-level/hard"
            className="text-blue-500 hover:underline"
          >
            Hard
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuestionLevel;
