/* eslint-disable no-unused-vars */
import React from "react";
import {
  Vote,
  GraduationCap,
  Building2,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  UserCheck,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ElectionCard Component
const ElectionCard = ({ title, status, endDate, type, onNavigate }) => {
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
      <button
        onClick={() => onNavigate("/vote")}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <Vote className="w-4 h-4" />
        {isActive ? "Vote Now" : "View Details"}
      </button>
    </div>
  );
};

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
  voterStatus = "unregistered", // can be "unregistered", "pending", "approved"
}) => {
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
                  <a
                    href="/register-voter"
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register as Voter
                  </a>
                </div>
              )}
              {voterStatus === "pending" && (
                <div>
                  <p className="text-yellow-600 flex items-center gap-2 mt-2">
                    <AlertCircle className="w-5 h-5" />
                    Registration Pending
                  </p>
                  <p className="text-gray-600 mt-2">
                    Your voter registration is under review. We'll notify you
                    once approved.
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
          </div>
        </div>

        {/* Elections Section - Blurred if not approved */}
        <div
          className="relative"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* College Elections */}
            <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">College Elections</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <ElectionCard 
                title="College Fest King/Queen"
                status="Active"
                endDate="Feb 10, 2025"
                type="college"
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
            <div className={`bg-white rounded-lg shadow ${voterStatus !== "approved" ? "opacity-50" : ""}`}>
              <div className="p-6 border-b">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Government Elections</h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ElectionCard 
                  title="Local Council Election"
                  status="Active"
                  endDate="Feb 20, 2025"
                  type="government"
                  onNavigate={onNavigate}
                />
                <ElectionCard 
                  title="Youth Representative"
                  status="Upcoming"
                  endDate="Mar 1, 2025"
                  type="government"
                  onNavigate={onNavigate}
                />
              </div>
            </div>
            {voterStatus !== "approved" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-gray-600">Complete voter registration to participate in government elections</p>
                </div>
              </div>
            )}
          </div>
          </div>

          {/* {voterStatus !== "approved" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-600">
                  Complete voter registration to view and participate in
                  elections
                </p>
              </div>
            </div>
          )} */}
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

// Previous imports remain same...



// const Dashboard = ({ 
//   onNavigate, 
//   onLogout, 
//   username = "User",
//   voterStatus = "unregistered"
// }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header remains same */}
//       <header className="bg-white shadow">
//         {/* ... header content ... */}
//       </header>

//       <main className="container mx-auto px-4 py-8">
//         {/* Voter Status Card */}
//         <div className="bg-white rounded-lg shadow p-6 mb-8">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-900">Voter Status</h2>
//               {voterStatus === "unregistered" && (
//                 <div>
//                   <p className="text-red-600 flex items-center gap-2 mt-2">
//                     <XCircle className="w-5 h-5" />
//                     Not Registered for Government Elections
//                   </p>
//                   <p className="text-gray-600 mt-2">
//                     You can participate in college elections. Register to access government elections.
//                   </p>
//                   <button 
//                     onClick={() => onNavigate('/register-voter')}
//                     className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                   >
//                     Register for Government Elections
//                   </button>
//                 </div>
//               )}
//               {/* Other status states remain same */}
//             </div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* College Elections - Always Accessible */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="p-6 border-b">
//               <div className="flex items-center gap-3">
//                 <GraduationCap className="w-6 h-6 text-blue-600" />
//                 <h2 className="text-xl font-semibold text-gray-900">College Elections</h2>
//               </div>
//             </div>
//             <div className="p-6 space-y-4">
//               <ElectionCard 
//                 title="College Fest King/Queen"
//                 status="Active"
//                 endDate="Feb 10, 2025"
//                 type="college"
//                 onNavigate={onNavigate}
//               />
//               <ElectionCard 
//                 title="Student Council President"
//                 status="Upcoming"
//                 endDate="Feb 15, 2025"
//                 type="college"
//                 onNavigate={onNavigate}
//               />
//             </div>
//           </div>

//           {/* Government Elections - Requires Registration */}
//           <div className="relative">
//             <div className={`bg-white rounded-lg shadow ${voterStatus !== "approved" ? "opacity-50" : ""}`}>
//               <div className="p-6 border-b">
//                 <div className="flex items-center gap-3">
//                   <Building2 className="w-6 h-6 text-green-600" />
//                   <h2 className="text-xl font-semibold text-gray-900">Government Elections</h2>
//                 </div>
//               </div>
//               <div className="p-6 space-y-4">
//                 <ElectionCard 
//                   title="Local Council Election"
//                   status="Active"
//                   endDate="Feb 20, 2025"
//                   type="government"
//                   onNavigate={onNavigate}
//                 />
//                 <ElectionCard 
//                   title="Youth Representative"
//                   status="Upcoming"
//                   endDate="Mar 1, 2025"
//                   type="government"
//                   onNavigate={onNavigate}
//                 />
//               </div>
//             </div>
//             {voterStatus !== "approved" && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="bg-white p-4 rounded-lg shadow-lg">
//                   <p className="text-gray-600">Complete voter registration to participate in government elections</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Activity section remains same */}
//       </main>
//     </div>
//   );
// };

// // Other component definitions remain same...

// export default Dashboard;