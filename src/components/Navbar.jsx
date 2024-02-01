import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto bg-[#fff] border-2 h-16 rounded-md my-2 navbar ">
        <div className="flex justify-between mx-8 items-center  py-3">
          <img src={Logo} alt="/" className="w-[170px]  mx-4" />
          <ul className="md:flex hidden uppercase font-semibold cursor-pointer text-xl">
            <li className="mx-4">Dashboard</li>
            <li className="mx-4">Sign Up</li>
            <li className="mx-4">Sign IN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
