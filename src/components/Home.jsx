import School from "../assets/School.png";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div className="w-full my-10">
      <div className="max-w-[1200px] mx-auto md:grid grid-cols-2 md:gap-1 gap-10">
        <div>
          <img src={School} alt="/" className="  px-8 " />
        </div>
        <div className=" m-auto text-center text-5xl text-[#2c2cb9] font-bold">
          <Typewriter
            words={[
              "Together We Learn, Together We Grow",
              "Educate, Empower, Excel,",
              " Discover, Dream, Achieve🤩",
            ]}
            loop={""}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
