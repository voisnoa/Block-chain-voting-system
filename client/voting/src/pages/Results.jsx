// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Results() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get("http://localhost:3012/results");
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };
    fetchResults();
  }, []);

  //       setMessage("Please select a candidate.");
  //       return;
  //     }
  //     if (!voterId) {
  //       setMessage("You must be logged in to vote.");
  //       return;
  //     }

  //     setLoading(true);
  //     setMessage("");
  //     try {
  //       const response = await axios.post("http://localhost:3012/vote", {
  //         voter_id: voterId,
  //         candidate_id: selectedCandidate,
  //       });
  //       setMessage(response.data.message);
  //     } catch (error) {
  //       setMessage(error.response?.data?.error || "Voting failed.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <div className="space-y-2"></div>

      <div className="mt-6 p-4">
        <h3 className="text-lg font-bold mb-4">Live Voting Results</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={results}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="votes" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

//livevotingcode
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// // import { Card, CardContent } from "@/components/ui/card";

// export default function Results() {
// //   const [candidates, setCandidates] = useState([]);
// //   const [selectedCandidate, setSelectedCandidate] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
//   const [results, setResults] = useState([]);

// //   const voterId = localStorage.getItem("voter_id");

//   useEffect(() => {
//     const fetchResults = async () => {
//       try {
//         const response = await axios.get("http://localhost:3012/results");
//         setResults(response.data);
//       } catch (error) {
//         console.error("Error fetching results", error);
//       }
//     };
//     fetchResults();
//   }, []);

// //   const handleVote = async () => {
// //     if (!selectedCandidate) {
// //       setMessage("Please select a candidate.");
// //       return;
// //     }
// //     if (!voterId) {
// //       setMessage("You must be logged in to vote.");
// //       return;
// //     }

// //     setLoading(true);
// //     setMessage("");
// //     try {
// //       const response = await axios.post("http://localhost:3012/vote", {
// //         voter_id: voterId,
// //         candidate_id: selectedCandidate,
// //       });
// //       setMessage(response.data.message);
// //     } catch (error) {
// //       setMessage(error.response?.data?.error || "Voting failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
//       {/* <h2 className="text-xl font-bold mb-4">Vote for Your Candidate</h2> */}
//       <div className="space-y-2">
//         {/* {candidates.map((candidate) => (
//           <label key={candidate.id} className="block">
//             <input
//               type="radio"
//               name="candidate"
//               value={candidate.id}
//               onChange={(e) => setSelectedCandidate(e.target.value)}
//             />
//             <span className="ml-2">{candidate.name}</span>
//           </label>
//         ))} */}
//       </div>
//       {/* <button onClick={handleVote} disabled={loading} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
//         {loading ? "Submitting..." : "Submit Vote"}
//       </button> */}
//       {/* {message && <p className="mt-2 text-center text-red-500">{message}</p>} */}

//       <div className="mt-6 p-4">
//         <h3 className="text-lg font-bold mb-4">Live Voting Results</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={results}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="votes" fill="#4F46E5" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }
