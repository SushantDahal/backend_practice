import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
const Sidebar = () => {
  const [side, setSide] = useState(true); // Initially show the sidebar
  function handleSide() {
    setSide(!side);
  }

  return (
    <div>
      <FiMenu
        className="fixed top-0 lg:left-[300px] left-[180px] my-4 text-black "
        size={40}
        onClick={handleSide} // Toggle sidebar visibility when clicking the menu icon
      />
      <div
        className={
          side
            ? "bg-[#7ab6fa] fixed h-full lg:w-[300px] w-[-50px] text-white font-bold flex flex-col pt-20 items-center sidebar   "
            : " left-[-100%] absolute duration-300 bg-red-700"
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
