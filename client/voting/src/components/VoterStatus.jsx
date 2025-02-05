/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CheckCircle2, XCircle, AlertCircle, UserCheck } from "lucide-react";

function VoterStatus({
//   onNavigate,
//   onLogout,
//   username = "User",
  voterStatus = "unregistered" // can be "unregistered", "pending", "approved"
}) {
  return (
    <div>
      {voterStatus === "unregistered" && (
        <div>
          <p className="text-red-600 flex items-center gap-2 mt-2">
            <XCircle className="w-5 h-5" />
            Not Registered
          </p>
          <p className="text-gray-600 mt-2">
            Complete voter registration to participate in elections
          </p>

          <br />

          {voterStatus === "unregistered" && (
            <a
              href="/register-voter"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register as Voter
            </a>
          )}
        </div>
      )}
      {voterStatus === "pending" && (
        <div>
          <p className="text-yellow-600 flex items-center gap-2 mt-2">
            <AlertCircle className="w-5 h-5" />
            Registration Pending
          </p>
          <p className="text-gray-600 mt-2">
            Your voter registration is under review. We&apos;ll notify you once
            approved.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600">
              Voter ID verification in progress
            </span>
          </div>
        </div>
      )}
      {voterStatus === "approved" && (
        <div>
          <p className="text-green-600 flex items-center gap-2 mt-2">
            <CheckCircle2 className="w-5 h-5" />
            Verified Voter
          </p>
          <p className="text-gray-600 mt-2">
            You can now participate in all eligible elections
          </p>
        </div>
      )}
    </div>
  );
}

export default VoterStatus;
