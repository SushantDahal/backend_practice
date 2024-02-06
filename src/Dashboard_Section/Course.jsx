import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <div className="min-w-[1200px] w-full h-[910px] bg-[#ecec9d]  flex flex-row ">
        <div className="  w-[1200px] lg:ml-[310px]">
          <div className="flex mx-10  justify-between items-center py-2 mt-[80px] mb-10">
            <h1 className="text-3xl text-[#2c2cb9] font-bold">COURSE</h1>
            <Link to="/">
              <img
                src={Logo}
                alt="/"
                className="w-[200px] min-w-[120px]  mx-4"
              />
            </Link>
          </div>
          <div className="mx-8   py-4 px-2">
            <div className="bg-white  max-w-[1000px] rounded-md grid grid-cols-3 px-8 pt-8 pb-4 h-auto">
              <div className="">
                <h1 className="text-2xl">Course Name</h1>
                <p className="pt-6 text-xl">Mathmatics</p>
                <p className="pt-6 text-xl">Social Studies</p>
                <p className="pt-6 text-xl">Science</p>
              </div>
              <div className="">
                <h1 className="text-2xl">Course Id</h1>
                <p className="pt-6 text-xl pl-2">M00123</p>
                <p className="pt-6 text-xl pl-2">S01103</p>
                <p className="pt-6 text-xl pl-2">SC2896</p>
              </div>
              <div className="">
                <h1 className="text-2xl">Credit Hour</h1>
                <p className="pt-6 text-xl pl-6">110</p>
                <p className="pt-6 text-xl pl-6">100</p>
                <p className="pt-6 text-xl pl-6">150</p>
              </div>

              <div className="relative bottom-0 left-[700px] mt-16">
                <Link to="/Registercourse">
                  <button className="w-[130px] bg-[red] rounded-md py-2 text-2xl text-white font-bold ">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
