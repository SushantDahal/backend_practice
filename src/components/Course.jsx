//
//
import Course1 from "../assets/Course1.jpg";
import Course2 from "../assets/Course2.jpg";
import Course3 from "../assets/Course3.jpg";
import Course4 from "../assets/Course4.jpg";
const Course = () => {
  return (
    <div className="w-full  h-auto ">
      <hr className="w-[10%]  mt-12 h-1 bg-black mx-auto" />
      <div className="max-w-[1200px] pb-10 my-6 mx-auto      ">
        <h1 className="text-center text-5xl py-8 font-bold text-[#2c2cb9]">
          POPULAR COURSES
        </h1>
        {/* Course 1 */}
        <div className="grid md:grid-cols-2 gap-10  py-5">
          <div className="p-6 mx-auto">
            <img src={Course1} alt="" className="w-[400px]" />
          </div>
          <div className=" flex items-center px-6 text-center mr-10 text-[#2c2cb9]">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi pariatur nesciunt dolorum corrupti harum molestias
              incidunt. Ut quia ad mollitia, nihil
            </h1>
          </div>
        </div>
        {/* Course 2 */}
        <div className="grid md:grid-cols-2 gap-10 py-5">
          <div className="p-6 mx-auto lg:order-1 md:order-2 ">
            <img src={Course2} alt="" className="w-[400px]" />
          </div>
          <div className=" flex items-center px-6 text-center mr-10 text-[#2c2cb9]">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi pariatur nesciunt dolorum corrupti harum molestias
              incidunt. Ut quia ad mollitia, nihil
            </h1>
          </div>
        </div>
        {/* Course 3 */}
        <div className="grid md:grid-cols-2 gap-10  py-5">
          <div className="p-6 mx-auto ">
            <img src={Course3} alt="" className="w-[400px]" />
          </div>
          <div className=" flex items-center px-6 text-center mr-10 text-[#2c2cb9]">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi pariatur nesciunt dolorum corrupti harum molestias
              incidunt. Ut quia ad mollitia, nihil
            </h1>
          </div>
        </div>
        {/* Course 4 */}
        <div className="grid md:grid-cols-2 gap-10  py-5">
          <div className="p-6 mx-auto lg:order-1 md:order-2 ">
            <img src={Course4} alt="" className="w-[400px]" />
          </div>
          <div className=" flex items-center px-6 text-center mr-10 text-[#2c2cb9]">
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi pariatur nesciunt dolorum corrupti harum molestias
              incidunt. Ut quia ad mollitia, nihil
            </h1>
          </div>
        </div>
      </div>
      <hr className="w-[10%]  mb-12 h-1 bg-black mx-auto" />
    </div>
  );
};
export default Course;
