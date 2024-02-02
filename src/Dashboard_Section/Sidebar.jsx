import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="min-w-[1000px] w-full h-[910px] bg-[#ecec9d]  flex flex-row dashboard">
      <div className="bg-[#7ab6fa] fixed h-full  w-[300px] text-white font-bold flex flex-col justify-center items-center">
        <button className=" bg-[#87cf39 home">HOME</button>
        <button>STUDENT</button>
        <button>STAFF</button>
        <button>COURSE</button>
      </div>
      <div className="  w-[1200px] ml-[310px]">
        <div className="flex mx-10  justify-between items-center py-2 mt-[80px] mb-10">
          <h1 className="text-3xl text-[#2c2cb9] font-bold">DASHBOARD</h1>
          <Link to="/">
            <img src={Logo} alt="/" className="w-[200px] min-w-[120px]  mx-4" />
          </Link>
        </div>
        <div className="mx-8   grid md:grid-cols-3 gap-10 py-4 px-2">
          <div className="bg-[#7ab6fa] text-center py-4 rounded-md shadow-md shadow-black">
            <h1 className="text-3xl font-bold text-[#f8f6f6]">
              Total Students
            </h1>
            <p className="text-3xl font-bold py-2 text-[#2c2cb9]">800</p>
          </div>
          <div className="bg-[#7ab6fa] text-center py-4 rounded-md shadow-md shadow-black">
            <h1 className="text-3xl font-bold text-[#f8f6f6]">Total Staffs</h1>
            <p className="text-3xl font-bold py-2 text-[#2c2cb9]">25</p>
          </div>
          <div className="bg-[#7ab6fa] text-center py-4 rounded-md shadow-md shadow-black">
            <h1 className="text-3xl font-bold text-[#f8f6f6]">
              Total Teachers
            </h1>
            <p className="text-3xl font-bold py-2 text-[#2c2cb9]">15</p>
          </div>
          <div className="bg-[#7ab6fa] text-center py-4 rounded-md shadow-md shadow-black">
            <h1 className="text-3xl font-bold text-[#f8f6f6]">Total Courses</h1>
            <p className="text-3xl font-bold py-2 text-[#2c2cb9]">11</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
