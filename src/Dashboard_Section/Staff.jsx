import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div>
      <div className="min-w-[1200px] w-full h-[910px] bg-[#ecec9d]  flex flex-row ">
        <div className="  w-[1200px] lg:ml-[310px]">
          <div className="flex mx-10  justify-between items-center py-2 mt-[80px] mb-10">
            <h1 className="text-3xl text-[#2c2cb9] font-bold">STAFF</h1>
            <Link to="/">
              <img
                src={Logo}
                alt="/"
                className="w-[200px] min-w-[120px]  mx-4"
              />
            </Link>
          </div>
          <div className="mx-8   py-4 px-2">
            <div className="bg-white  max-w-[1000px] rounded-md grid grid-cols-4 px-8 pt-8 pb-4 h-auto">
              <div className="">
                <h1 className="text-2xl">Name</h1>
                <p className="pt-6 text-xl">Sushant Dahal</p>
                <p className="pt-6 text-xl">Sachin Dahal</p>
                <p className="pt-6 text-xl">Dinesh Bhandari</p>
              </div>
              <div className="">
                <h1 className="text-2xl">Address</h1>
                <p className="pt-6 text-xl pl-2">Itahari-1</p>
                <p className="pt-6 text-xl pl-2">Itahari-2</p>
                <p className="pt-6 text-xl pl-2">Itahari-3</p>
              </div>
              <div className="">
                <h1 className="text-2xl">Contact</h1>
                <p className="pt-6 text-xl ">9819067814</p>
                <p className="pt-6 text-xl ">9819067817</p>
                <p className="pt-6 text-xl ">9819067818</p>
              </div>
              <div className="">
                <h1 className="text-2xl">Date</h1>
                <p className="pt-6 text-xl ">2020/02/1</p>
                <p className="pt-6 text-xl ">2021/03/3 </p>
                <p className="pt-6 text-xl ">2022/04/2 </p>
              </div>
              <div className="relative bottom-0 left-[700px] mt-16">
                <Link to="/Registerstaffs">
                  <button className="w-[180px] bg-[red] rounded-md py-2 text-2xl text-white font-bold ">
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
export default Student;
