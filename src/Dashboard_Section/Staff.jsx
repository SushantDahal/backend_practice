import Sidebar from "./Sidebar";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Staff = () => {
  return (
    <div className="min-w-[1000px] w-full h-[910px] bg-[#ecec9d]  flex flex-row ">
      <div className="  w-[1200px] lg:ml-[310px] ">
        <div className="flex mx-10  justify-between items-center py-2 mt-[80px] mb-10">
          <h1 className="text-3xl lg:ml-0 ml-[160px] text-[#2c2cb9] font-bold">
            DASHBOARD
          </h1>
          <Link to="/">
            <img src={Logo} alt="/" className="w-[200px] min-w-[120px]  mx-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Staff;
