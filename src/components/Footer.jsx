import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#ECF396] h-auto pt-14 pb-10 footer">
      <div className="max-w-[1240px] bg-[#000] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 ">
          <div className=" col-span-1 ">
            <h2 className="text-center text-[#2c2cb9] py-3 text-xl font-bold">
              Quick Link
            </h2>
            <ul className="flex items-center flex-col">
              <li className="py-2">About Us</li>
              <li className="py-2">Contact Us</li>
              <li className="py-2">Privacy Ploicy</li>
              <li className="py-2">Terms and Condition</li>
              <li className="py-2">FAQs and Help</li>
            </ul>
          </div>

          <div className=" col-span-1 ">
            <h2 className="text-center text-[#2c2cb9] py-3 text-xl font-bold">
              Quick Link
            </h2>
            <ul className="flex items-center flex-col">
              <li className="py-2 flex items-center">
                <FaLocationDot className="mx-2" />
                Itahari-2,Sunsari
              </li>
              <li className="py-2 flex items-center">
                <BiSolidPhoneCall className="mx-2" />
                +977 9819067819
              </li>
              <li className="py-2 flex items-center">
                <MdEmail className="mx-2" />
                school@1gmail.com
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-span-2 mx-10">
            <h2 className="text-center text-[#2c2cb9] py-3 text-xl font-bold">
              Newsletter
            </h2>
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              quibusdam ullam architecto veritatis culpa ipsam.
            </p>
            <div className="bg-[white] border-2 border-black mx-4 py-3 flex justify-between my-4 rounded-md">
              <input
                type="text"
                className=" outline-none  w-[80%] ml-6 bg-transparent text-xl"
              />
              <button className="w-[80px] bg-[blue] mx-6 rounded-lg text-white py-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-xs pt-5">
        Copyright 2024 by SushantDahal
      </h1>
    </div>
  );
};
export default Footer;
