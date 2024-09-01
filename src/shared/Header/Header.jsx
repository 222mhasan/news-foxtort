import moment from "moment";
import logo from "../../../src/images/logo/web-logo-2.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between">
      {/* left side */}
      <div className="space-y-1 mt-4">
        <p className="font-semibold text-md md:text-lg ml-1 md:ml-2 ">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
        <img className="w-40 md:w-72" src={logo} alt="" />
      </div>

      {/* right side */}
      <div className="mr-3 mt-6 md:mt-14">
      
        <div className="flex gap-2 md:gap-3 items-center">
          <a href="#">
            <FaFacebookF className="md:text-2xl text-blue-800 hover:text-violet-400" />
          </a>
          <a href="#">
            <FaXTwitter className="md:text-2xl hover:text-violet-400" />
          </a>
          <a href="#">
            <ImInstagram className="md:text-2xl text-pink-500 hover:text-violet-400" />
          </a>
          <a href="#">
            <FaYoutube  className="text-2xl md:text-3xl text-red-600 hover:text-violet-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
