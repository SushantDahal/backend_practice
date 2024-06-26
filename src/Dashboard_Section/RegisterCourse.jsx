import { Link } from "react-router-dom";

const RegisterCourse = () => {
  return (
    <div className="w-full h-[1000px] bg-blue-200 min-w-[1280px] flex justify-center">
      <Link to="/CourseSection">
        <button className="absolute w-[130px] bg-[red] rounded-md py-2 top-8 left-[220px] text-2xl text-white font-bold ">
          BACK
        </button>
      </Link>
      <div class="  min-w-[900px] rounded-md md:h-[550px] h-[800px] bg-[#ECF396] mt-[150px]">
        <h1 className="text-center text-5xl font-bold my-10 underline-offset-2">
          Register Course
        </h1>
        <div className="grid md:grid-cols-2 gap-10 py-2 px-2  max-w-[800px] mx-auto my-2">
          <div>
            <input
              placeholder="COURSE Name"
              type="text"
              className="w-[100%] p-3 outline-none rounded-md text-2xl"
            />
          </div>
          <div>
            <input
              placeholder="Course ID"
              maxLength="6"
              type="text"
              className="w-[100%] p-3 outline-none rounded-md text-2xl"
            />
          </div>
          <div>
            <input
              placeholder="Course Credit Hour"
              maxLength="3"
              type="text"
              className="w-[100%] p-3 outline-none rounded-md text-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/CourseSection">
            <button className="w-[240px] bg-[red] rounded-md py-2 text-center md:mt-[50px] mt-[30px] text-2xl text-white font-bold ">
              Register Course
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterCourse;
