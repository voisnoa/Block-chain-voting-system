/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VoterPage() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null); // Default as null
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const voterId = localStorage.getItem("voter_id");

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:3012/candidates");
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
      const response = await axios.post("http://localhost:3012/vote", {
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
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl border border-gray-200 mt-10">
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
                  let selected =e.target.value // Make sure to convert to number
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
    </div>
  );
}
