import Profile1 from "../assets/profile1.jpg";
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";
import { FaStar } from "react-icons/fa";

const Instructor = () => {
  return (
    <div className="w-full bg-[#ECF396] h-auto py-4">
      <div className="max-w-[1200px] mx-auto      ">
        <h1 className="text-center text-5xl pb-8 font-bold text-[#2c2cb9]">
          EXPERT INSTRUCTORS
        </h1>

        <div className="grid md:grid-cols-3 gap-16  py-5 mx-10">
          {/* Course 1 */}
          <div className="flex justify-center items-center py-4 rounded-lg shadow-2xl shadow-yellow-400 flex-col bg-[#7ab6fa] ">
            <img
              src={Profile1}
              alt="profile"
              className="rounded-[100%] h-[150px] w-[150px] object-cover"
            />
            <h2 className="text-xl font-bold pt-2">Andrew Ng</h2>
            <h2 className="py-2">Co-founder of Coursera </h2>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>
          {/* Course 2 */}
          <div className="flex justify-center items-center py-4 rounded-lg shadow-2xl shadow-yellow-400 flex-col bg-[#7ab6fa]">
            <img
              src={Profile2}
              alt="profile"
              className="rounded-[100%] h-[150px] w-[150px] object-cover"
            />
            <h2 className="text-xl font-bold pt-2">Neil deGrasse Tyson</h2>
            <h2 className="py-2">Host of "Cosmos: A Spacetime Odyssey"</h2>
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>
          {/* Course 3 */}
          <div className="flex justify-center items-center py-4 rounded-lg shadow-2xl shadow-yellow-400 flex-col bg-[#7ab6fa] ">
            <img
              src={Profile3}
              alt="profile"
              className="rounded-[100%] h-[150px] w-[150px] object-cover"
            />
            <h2 className="text-xl font-bold pt-2">Wiffy dre</h2>
            <h2 className="py-2">CEO and Lead Designer </h2>
            <div className="flex text-yellow-500">
              {Array.from({ length: 4 }).map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
