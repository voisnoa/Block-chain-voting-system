/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {  Shield, LineChart, Building2, GraduationCap, LockKeyhole, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Secure Digital Voting Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enterprise-grade blockchain voting system for both institutional and government elections.
            Secure, transparent, and easy to use.
          </p>
          <div className="flex justify-center gap-4">
            <button 
                onClick={() => navigate('/signup')} 
             className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
              Get Started <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Election Types Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Election Type
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">College & Youth Events</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Perfect for college fests, student council elections, and youth icon contests. 
              Easy to set up and manage with real-time results.
            </p>
            <div className="space-y-3 mb-6">
              <Feature text="College Fest Elections" />
              <Feature text="Student Council Voting" />
              <Feature text="Youth Icon Contests" />
              <Feature text="Club Leadership Selection" />
            </div>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Create College Election
            </button>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Government Elections</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Enterprise-grade blockchain security for government and public elections. 
              Immutable records with maximum transparency.
            </p>
            <div className="space-y-3 mb-6">
              <Feature text="Military-grade Encryption" />
              <Feature text="Immutable Blockchain Records" />
              <Feature text="Voter Identity Verification" />
              <Feature text="Transparent Vote Counting" />
            </div>
            <button className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Setup Government Election
            </button>
          </div>
        </div>
      </div>

      {/* Active Elections Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Active Elections
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ElectionCard 
              title="College Fest King/Queen"
              endDate="Feb 10, 2025"
              participants="12"
              type="college"
            />
            <ElectionCard 
              title="Local Government Election"
              endDate="Feb 15, 2025"
              participants="8"
              type="government"
            />
            <ElectionCard 
              title="Youth Icon 2025"
              endDate="Feb 20, 2025"
              participants="15"
              type="college"
            />
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Enterprise-Grade Security
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            Icon={Shield}
            title="Blockchain Security"
            description="Every vote is encrypted and stored on an immutable blockchain ledger."
          />
          <FeatureCard 
            Icon={LockKeyhole}
            title="Secure Authentication"
            description="Multi-factor authentication and biometric verification options."
          />
          <FeatureCard 
            Icon={LineChart}
            title="Transparent Counting"
            description="Real-time vote counting with public verification capability."
          />
        </div>
      </div>
    </div>
  );
};

const Feature = ({ text }) => (
  <div className="flex items-center gap-2">
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>{text}</span>
  </div>
);

const FeatureCard = ({ Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ElectionCard = ({ title, endDate, participants, type }) => (
  <div className={`${type === 'government' ? 'bg-green-800' : 'bg-blue-800'} p-6 rounded-xl hover:opacity-90 transition-opacity`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex justify-between items-center text-blue-200">
      <span>Ends: {endDate}</span>
      <span>{participants} Candidates</span>
    </div>
    <button className="mt-4 w-full bg-white text-blue-900 py-2 rounded-lg hover:bg-blue-50 transition-colors">
      View Details
    </button>
  </div>
);

export default LandingPage;