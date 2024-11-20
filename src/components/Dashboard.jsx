import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userinfo from "./Userinfo";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name && email) {
      navigate("/question-type");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Quiz App</h1>
      <div className="bg-white p-6 rounded shadow-md w-80">
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
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </div>
      <Userinfo username={name} email={email} />
    </div>
  );
};

export default Dashboard;
