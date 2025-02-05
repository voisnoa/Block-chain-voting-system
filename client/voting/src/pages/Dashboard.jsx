/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ElectionCard from "../components/ElectionCard";
import React from "react";
import {
  GraduationCap,
  Building2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  UserCheck,
  LogOut,
} from "lucide-react";
import VoterStatus from "../components/VoterStatus";
import { useLocation } from "react-router-dom";

// ActivityItem Component
const ActivityItem = ({ text, time }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-gray-600">{text}</span>
    <span className="text-sm text-gray-500">{time}</span>
  </div>
);

// Main Dashboard Component
const Dashboard = ({
  onNavigate,
  onLogout,
  username = "User",
  // voterStatus = "unregistered", // can be "unregistered", "pending", "approved"
}) => {
  const location = useLocation();
  const voterStatus = location.state?.voterStatus || "unregistered";
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Election Dashboard
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {username}</span>
              <button
                onClick={onLogout}
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Voter Status Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Voter Status
              </h2>
              { <VoterStatus voterStatus={voterStatus} /> }
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-8">
            {/* College Elections */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    College Elections
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ElectionCard
                  title="College Fest King/Queen"
                  status="Active"
                  endDate="Feb 10, 2025"
                  type="college"
                  voterStatus="approved"
                  onNavigate={onNavigate}
                />
                <ElectionCard
                  title="Student Council President"
                  status="Upcoming"
                  endDate="Feb 15, 2025"
                  type="college"
                  onNavigate={onNavigate}
                />
              </div>
            </div>

            {/* Government Elections */}
            <div className="relative">
              <div
                className={`bg-white rounded-lg shadow ${
                  voterStatus !== "approved" ? "opacity-50" : ""
                }`}
              >
                <div className="p-6 border-b">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-green-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      Government Elections
                    </h2>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <ElectionCard
                    title="Local Council Election"
                    status="Active"
                    endDate="Feb 20, 2025"
                    type="government"
                    onNavigate={onNavigate}
                    voterStatus={voterStatus}
                  />
                  <ElectionCard
                    title="Youth Representative"
                    status="Upcoming"
                    endDate="Mar 1, 2025"
                    type="government"
                    onNavigate={onNavigate}
                    voterStatus={voterStatus}
                  />
                </div>
              </div>
              {voterStatus !== "approved" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-gray-600">
                      Complete voter registration to participate in government
                      elections
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {voterStatus === "pending" && (
                <ActivityItem
                  text="Voter registration submitted and pending approval"
                  time="2 hours ago"
                />
              )}
              {voterStatus === "approved" && (
                <>
                  <ActivityItem
                    text="Voter registration approved"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    text="New election announced: Student Council President"
                    time="1 day ago"
                  />
                </>
              )}
              <ActivityItem
                text="Account created successfully"
                time="2 days ago"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
