import { FaUserTie } from "react-icons/fa6";
import { MdOutlineSports } from "react-icons/md";
import { SiCodeproject, SiGoogleclassroom } from "react-icons/si";
import { MdLocalLibrary } from "react-icons/md";

const Features = () => {
  return (
    <div className="w-full bg-[#ECF396] h-auto py-4">
      <h1 className="text-center text-5xl pb-8 font-bold text-[#2c2cb9]">
        FEATURES
      </h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4 mx-5">
        {/* Skilled instructor */}
        <div className="flex flex-col justify-center items-center rounded-md bg-[#7ab6fa] p-2">
          <FaUserTie className="" size={40} />
          <h2 className="py-2 text-xl font-semibold">Skilled Instructor</h2>
          <h4 className="text-xs text-center pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            quam perspiciatis quis.
          </h4>
        </div>
        {/* Skilled instructor */}
        <div className="flex flex-col justify-center items-center rounded-md bg-[#7ab6fa] p-2">
          <SiGoogleclassroom className="" size={40} />
          <h2 className="py-2 text-xl font-semibold">Online Class</h2>
          <h4 className="text-xs text-center pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            quam perspiciatis quis.
          </h4>
        </div>
        {/* Skilled instructor */}
        <div className="flex flex-col justify-center items-center rounded-md bg-[#7ab6fa] p-2">
          <MdLocalLibrary className="" size={40} />
          <h2 className="py-2 text-xl font-semibold">Library</h2>
          <h4 className="text-xs text-center pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            quam perspiciatis quis.
          </h4>
        </div>
        {/* Skilled instructor */}
        <div className="flex flex-col justify-center items-center rounded-md bg-[#7ab6fa] p-2">
          <SiCodeproject className="" size={40} />
          <h2 className="py-2 text-xl font-semibold">Home Project</h2>
          <h4 className="text-xs text-center pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            quam perspiciatis quis.
          </h4>
        </div>
        {/* Skilled instructor */}
        <div className="flex flex-col justify-center items-center rounded-md bg-[#7ab6fa] p-2">
          <MdOutlineSports className="" size={40} />
          <h2 className="py-2 text-xl font-semibold">Sport Activities</h2>
          <h4 className="text-xs text-center pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non
            quam perspiciatis quis.
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Features;
