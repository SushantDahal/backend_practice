import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Course from "./components/Course";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Sidebar from "./Dashboard_Section/Sidebar";
import Dashboard from "./Dashboard_Section/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <Course />
      <Instructor />
      <Footer />
    </>
  );
}
function DashboardPage() {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
