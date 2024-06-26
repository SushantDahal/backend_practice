import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Course from "./components/Course";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";
import Sidebar from "./Dashboard_Section/Sidebar";
import Dashboard from "./Dashboard_Section/Dashboard";
import Student from "./Dashboard_Section/Student";
import RegisterStaff from "./Dashboard_Section/RegisterStaff";

import RegisterStudent from "./Dashboard_Section/RegisterStudent";
import RegisterCourse from "./Dashboard_Section/RegisterCourse";

import Staff from "./Dashboard_Section/Staff";
import Courses from "./Dashboard_Section/Course";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/StudentSection" element={<StudentSection />} />
          <Route path="/StaffSection" element={<StaffSection />} />
          <Route path="/CourseSection" element={<CourseSection />} />
          <Route path="/RegisterStdSection" element={<RegisterStd />} />
          <Route path="/Registerstaffs" element={<Registerstaff />} />
          <Route path="/Registercourse" element={<Registercourse />} />
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
function StudentSection() {
  return (
    <>
      <Sidebar />
      <Student />
    </>
  );
}
function StaffSection() {
  return (
    <>
      <Sidebar />
      <Staff />
    </>
  );
}
function CourseSection() {
  return (
    <>
      <Sidebar />
      <Courses />
    </>
  );
}
function RegisterStd() {
  return (
    <>
      <RegisterStudent />
    </>
  );
}
function Registerstaff() {
  return (
    <>
      <RegisterStaff />
    </>
  );
}
function Registercourse() {
  return (
    <>
      <RegisterCourse />
    </>
  );
}

export default App;
