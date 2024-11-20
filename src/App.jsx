// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import QuestionType from "./components/QuestionType";
// import DifficultyLevel from "./components/DifficultyLevel";
// import Quiz from "./components/Quiz";
// import Result from "./components/Result";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import Userinfo from "./Userinfo";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     if (name && email) {
//       navigate("/question-type");
//     } else {
//       alert("Please fill all fields");
//     }
//   };
//   return (
//     <>
//       <Router>
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//           <h1 className="text-3xl font-bold mb-6">Welcome to Quiz App</h1>
//           <div className="bg-white p-6 rounded shadow-md w-80">
//             <input
//               type="text"
//               placeholder="Enter Name"
//               className="w-full mb-4 p-2 border rounded"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="w-full mb-4 p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/question-type" element={<QuestionType />} />
//           <Route path="/difficulty-level" element={<DifficultyLevel />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/result" element={<Result />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom"; // Import useNavigate for navigation
import QuestionType from "./components/QuestionType";
import DifficultyLevel from "./components/DifficultyLevel";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false); // Track submission status

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="flex justify-between items-center w-full p-4 bg-white shadow-md fixed top-0 z-10">
          <h1 className="text-3xl font-bold">Quiz App</h1>
          {submitted &&
            name &&
            email && ( // Show name and email only after submit
              <div className="text-right">
                <p>{name}</p>
                <p>{email}</p>
              </div>
            )}
        </header>
        <div className="flex-1 mt-20 flex flex-col items-center">
          <div className="bg-white p-6 rounded shadow-md w-80">
            {!submitted && (
              <>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full mb-4 p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full mb-4 p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomNavigate
                  name={name}
                  email={email}
                  setSubmitted={setSubmitted}
                />
              </>
            )}
            {submitted && (
              <div className="text-center mt-4">
                <p>Welcome, {name}!</p>
                <p>Email: {email}</p>
              </div>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/question-type" element={<QuestionType />} />
          <Route path="/difficulty-level" element={<DifficultyLevel />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

// New component for navigation
const CustomNavigate = ({ name, email, setSubmitted }) => {
  const navigate = useNavigate(); // use hook here

  const handleSubmit = () => {
    if (name && email) {
      setSubmitted(true); // Mark as submitted
      navigate("/question-type"); // Navigate to question-type page
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="bg-blue-500 text-white px-4 py-2 rounded w-full"
    >
      Submit
    </button>
  );
};

export default App;
