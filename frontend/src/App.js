import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MockInterview from "./components/MockInterview";
import ResumeBuilder from "./components/ResumeBuilder";
import ResumeScorer from "./components/ResumeScorer";
import ResumeEditor from './components/ResumeEditor';
import Login from "./components/Login";
import Profile from "./components/Profile"; // ✅ Import Profile Page
import Layout from './components/Layout';
import ProgressTracker from "./components/progresstracker";
import JobSuggestions from "./components/JobSuggestions";
import Roadmap from "./components/Roadmap";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* ✅ Now Login is the homepage */}

        <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} /> {/* ✅ Profile Route */}
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume-editor" element={<ResumeEditor />} />
        <Route path="/resume-scorer" element={<ResumeScorer />} />
        <Route path="/job-suggestions" element={<JobSuggestions/>} />
        <Route path="/Roadmap" element={<Roadmap/>} />
        <Route path="/Progress-tracker" element={<ProgressTracker/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
