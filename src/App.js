import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Course from "./components/Course";
import Instructor from "./components/Instructor";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Course />
      <Instructor />
      <Footer />
    </div>
  );
}

export default App;
