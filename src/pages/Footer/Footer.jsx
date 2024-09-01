import logo from "../../images/logo/web-logo-2.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-poppins mt-10 border bg-footer-image bg-cover bg-no-repeat text-white py-10">
      <footer className="footer  p-10 ">
        <aside>
          <img className="w-56" src={logo} alt="" />
          <div className="mt-4">
            <p>
              Editor: Mehedi Hasan, Published by the <br />
              Chairman & Editorial Board <br /> on behalf of Media News Foxtort
              Ltd.
            </p>
            <p className="flex items-center gap-2">
              <CiLocationOn className="text-xl font-semibold" /> Mirpur-1,
              Dhaka-1216
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <IoMailUnreadOutline className="text-xl" />
              222mhasan@gmail.com
            </p>
          </div>
        </aside>
        <nav>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            About
          </a>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Contact
          </a>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Archive
          </a>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Disclaimer & Privacy Policy
          </a>
        </nav>
        <nav>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Advertisement
          </a>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Terms & Condition
          </a>
          <a
            className="flex gap-2 items-center text-lg hover:text-violet-700"
            href="#"
          >
            <FaAngleRight />
            Sitemap
          </a>
        </nav>
      </footer>
      <footer className="footer footer-center text-white p-4">
        <aside>
          <p className=" text-md">
            Copyright © {new Date().getFullYear()} - All right reserved by News
            Foxtort Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
