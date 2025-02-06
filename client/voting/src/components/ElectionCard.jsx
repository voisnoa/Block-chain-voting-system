/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Vote, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function ElectionCard({
  title,
  status,
  endDate,
  // eslint-disable-next-line no-unused-vars
  type,
  onNavigate,
  voterStatus,
}) {
  const isActive = status === "Active";

  return (
    <div className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span
          className={`px-2 py-1 rounded text-sm ${
            isActive
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </span>
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-3">
        <Clock className="w-4 h-4 mr-1" />
        Ends: {endDate}
      </div>
      <Link to="/vote"
        onClick={() => {
          if (voterStatus === "approved") {
            onNavigate("/vote");
          } else {
            alert("Complete voter registration to participate.");
          }
        }}
        disabled={voterStatus !== "approved"}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? voterStatus === "approved"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <Vote className="w-4 h-4" />
        {isActive
          ? voterStatus === "approved"
            ? "Vote Now"
            : "Restricted"
          : "View Details"}
      </Link>
    </div>
  );
}

export default ElectionCard;
