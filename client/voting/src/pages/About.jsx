import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 ">About <Link to="/" className="text-blue-600 underline">secureVote</Link></h1>
        
        <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-700">Our Mission</h2>
            <p className="text-gray-600 mt-2">
            At <strong>secureVote</strong>, we believe in the power of transparent, accessible, and secure voting. Our platform ensures that every vote counts and that all eligible voters can participate in a seamless, tamper-proof election process.
            </p>
        </div>
        
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Why Choose secureVote?</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li><strong>Blockchain-Powered Security</strong> – Ensuring each vote is immutable and protected from tampering.</li>
            <li><strong>User-Friendly Interface</strong> – Designed for clarity, simplicity, and ease of access.</li>
            <li><strong>Transparent Process</strong> – Real-time status updates on election phases.</li>
            <li><strong>Multi-Tier Elections</strong> – Supporting various elections, from college councils to government polls.</li>
            </ul>
        </div>

        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">How It Works</h2>
            <div className="mt-2 space-y-3">
            <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-600">
                <strong>1. Verify Your Status</strong> – Ensure you are a verified voter.
            </div>
            <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-600">
                <strong>2. Select an Active Election</strong> – Choose from ongoing elections available to you.
            </div>
            <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-600">
                <strong>3. Cast Your Vote</strong> – Make an informed choice and submit your vote securely.
            </div>
            <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-600">
                <strong>4. Track Election Progress</strong> – Stay updated on results and upcoming elections.
            </div>
            </div>
        </div>

        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">Get Involved</h2>
            <p className="text-gray-600 mt-2">
            secureVote is more than a platform—it’s a movement towards digital democracy. Join us in making elections secure, fair, and efficient.
            </p>
            <p className="text-gray-600 mt-2">
            For queries or support, contact us at <a href="mailto:support@securevote.com" className="text-blue-600 font-medium">support@securevote.com</a>.
            </p>
        </div>
        </div>

    <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
        <h2 className="text-xl font-bold">Blockchain Voting System</h2>
        <p className="mt-2">Developed by: <span className="font-semibold">Elysium</span></p>
        <p>Contributors: Sangeeth, Abdul Rahman, Marvan, Furkhan, Thameem</p>
        <p className="mt-2">Contact: <a href="mailto:team@votingproject.com" className="underline">team@votingproject.com</a></p>
        <p className="mt-2 text-sm opacity-75">© 2025 secureVote. All rights reserved.</p>
    </footer>
    </div>
    );
}

export default About