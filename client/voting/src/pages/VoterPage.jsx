/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function VoterPage() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null); // Default as null
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const voterId = localStorage.getItem("voter_id");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("https://securevote.onrender.com/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async () => {
    console.log("Selected Candidate:", selectedCandidate); // Debugging output
    console.log("Voter ID (before sending):", voterId);

    if (selectedCandidate === null) {
      // Explicit null check
      setMessage("Please select a candidate.");
      return;
    }
    if (!voterId) {
      setMessage("You must be logged in to vote.");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post("https://securevote.onrender.com/vote", {
        voter_id: voterId,
        candidate_id: selectedCandidate,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || "Voting failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-10">
    //   <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
    //     Vote for Your Candidate
    //   </h2>
    //   <div className="space-y-3">
    //     {candidates.map((candidate) => (

    //       <div
    //         key={candidate.id}
    //         className="flex items-center space-x-2 cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
    //       >
    //         <label className="w-full flex items-center space-x-2 cursor-pointer">
    //           <input
    //             type="radio"
    //             name="candidate"
    //             value={candidate.candidate_id}
    //             onChange={(e) => {
    //               let selected =e.target.value // Make sure to convert to number
    //               setSelectedCandidate(selected);
    //               console.log("Selected Candidate ID:", selected); // Log here to see the change
    //             }}
    //             className="w-4 h-4 text-blue-600 focus:ring-blue-500"
    //           />

    //           <span className="text-gray-700 font-medium">
    //             {candidate.name}
    //           </span>
    //         </label>
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     onClick={handleVote}
    //     disabled={loading}
    //     className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-400"
    //   >
    //     {loading ? "Submitting..." : "Submit Vote"}
    //   </button>
    //   {message && (
    //     <p className="mt-3 text-center text-red-500 font-medium">{message}</p>
    //   )}
    // </div>

    // <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-10 transition-transform transform hover:scale-105">
    //   <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    //     Vote for Your Candidate
    //   </h2>
    //   <div className="space-y-4">
    //     {candidates.map((candidate) => (
    //       <div
    //         key={candidate.id}
    //         className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-200"
    //       >
    //         <label className="w-full flex items-center space-x-3 cursor-pointer">
    //           <input
    //             type="radio"
    //             name="candidate"
    //             value={candidate.candidate_id}
    //             onChange={(e) => {
    //               let selected = e.target.value; // Make sure to convert to number
    //               setSelectedCandidate(selected);
    //               console.log("Selected Candidate ID:", selected); // Log here to see the change
    //             }}
    //             className="w-5 h-5 text-blue-600 focus:ring-blue-500"
    //           />
    //           <span className="text-gray-800 font-medium text-lg">
    //             {candidate.name}
    //           </span>
    //         </label>
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     onClick={handleVote}
    //     disabled={loading}
    //     className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-400"
    //   >
    //     {loading ? "Submitting..." : "Submit Vote"}
    //   </button>
    //   {message && (
    //     <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
    //   )}
    // </div>

    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg border border-gray-300">
    //     <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
    //       Choose Your Candidate
    //     </h2>
    //     <div className="space-y-4">
    //       {candidates.map((candidate) => (
    //         <div
    //           key={candidate.id}
    //           className="flex items-center space-x-4 cursor-pointer p-4 border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-300 transform hover:scale-105"
    //         >
    //           <label className="flex items-center space-x-3 w-full cursor-pointer">
    //             <input
    //               type="radio"
    //               name="candidate"
    //               value={candidate.candidate_id}
    //               onChange={(e) => {
    //                 let selected = e.target.value;
    //                 setSelectedCandidate(selected);
    //                 console.log("Selected Candidate ID:", selected);
    //               }}
    //               className="w-5 h-5 text-blue-600 focus:ring-blue-500"
    //             />
    //             <span className="text-gray-800 font-semibold text-lg">
    //               {candidate.name}
    //             </span>
    //           </label>
    //         </div>
    //       ))}
    //     </div>
    //     <button
    //       onClick={handleVote}
    //       disabled={loading}
    //       className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow transition duration-200 transform hover:scale-105 disabled:bg-gray-400"
    //     >
    //       {loading ? "Submitting..." : "Submit Vote"}
    //     </button>
    //     {message && (
    //       <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
    //     )}
    //   </div>
    // </div>

    // <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-10">
    //   <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
    //     Vote for Your Candidate
    //   </h2>
    //   <div className="space-y-3">
    //     {candidates.map((candidate) => (
    //       <div
    //         key={candidate.id}
    //         className="flex items-center space-x-2 cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
    //       >
    //         <label className="w-full flex items-center space-x-2 cursor-pointer">
    //           <input
    //             type="radio"
    //             name="candidate"
    //             value={candidate.candidate_id}
    //             onChange={(e) => {
    //               let selected = e.target.value; // Make sure to convert to number
    //               setSelectedCandidate(selected);
    //               console.log("Selected Candidate ID:", selected); // Log here to see the change
    //             }}
    //             className="w-4 h-4 text-blue-600 focus:ring-blue-500"
    //           />
    //           <span className="text-gray-700 font-medium">
    //             {candidate.name}
    //           </span>
    //         </label>
    //       </div>
    //     ))}
    //   </div>
    //   <button
    //     onClick={handleVote}
    //     disabled={loading}
    //     className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-400"
    //   >
    //     {loading ? "Submitting..." : "Submit Vote"}
    //   </button>

    //   {message && (
    //     <p className="mt-3 text-center text-red-500 font-medium">{message}</p>
    //   )}

    //   <a
    //     href="/results"
    //     className="mt-4 block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
    //   >
    //     See Results
    //   </a>
    // </div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 w-1/4 mx-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Vote for Your Candidate
        </h2>
        <div className="space-y-3">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="flex items-center space-x-2 cursor-pointer p-2 border rounded-lg hover:bg-gray-100"
            >
              <label className="w-full flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="candidate"
                  value={candidate.candidate_id}
                  onChange={(e) => {
                    let selected = e.target.value; // Make sure to convert to number
                    setSelectedCandidate(selected);
                    console.log("Selected Candidate ID:", selected); // Log here to see the change
                  }}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium">
                  {candidate.name}
                </span>
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleVote}
          disabled={loading}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit Vote"}
        </button>

        {message && (
          <p className="mt-3 text-center text-red-500 font-medium">{message}</p>
        )}

        <Link
          to="/results"
          className=" mt-4 block ml-auto w-1/3 text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          See Results
        </Link>
      </div>
    </div>
  );
}
