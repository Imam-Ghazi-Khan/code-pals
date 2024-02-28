import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-8 bg-gray-900 flex flex-col md:flex-row items-center justify-between text-white z-50">
      <Link to={"/"}><div className="font-bold text-2xl mb-4 md:mb-0 md:mr-8 cursor-pointer">&lt; / &gt; CODE-PALS</div></Link>
      <div className="flex">
        <button
          className="mr-4 bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Log In
        </button>
        <button
          className="bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
