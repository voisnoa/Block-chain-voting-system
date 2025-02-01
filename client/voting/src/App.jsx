import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/LoginSignup';
// import Home from './pages/Home';
// import Vote from './pages/Vote';
// import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/results" element={<Results />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
