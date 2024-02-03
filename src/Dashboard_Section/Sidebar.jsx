import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
  const [side, setSide] = useState(true); // Initially show the sidebar

  // Function to handle sidebar toggle
  function handleSide() {
    setSide(!side);
  }

  // useEffect hook to handle window width changes

  const handleSize = () => {
    if (window.innerWidth <= 680) {
      setSide(false);
    } else {
      setSide(true);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleSize);
    }
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <div>
      <FiMenu
        className="fixed top-0 left-[300px] text-black lg:hidden md:flex"
        size={50}
        onClick={handleSide} // Toggle sidebar visibility when clicking the menu icon
      />
      <div
        className={
          side
            ? "bg-[#7ab6fa] fixed h-full w-[300px] text-white font-bold flex flex-col pt-20 items-center sidebar   "
            : " left-[-100%] absolute  "
        }
      >
        <Link to="/dashboard">
          <button>HOME</button>
        </Link>
        <Link to="/StudentSection">
          <button>STUDENT</button>
        </Link>

        <Link to="/StaffSection">
          <button>STAFF</button>
        </Link>
        <Link to="/CourseSection">
          <button>COURSE</button>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
