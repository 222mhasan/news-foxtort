import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import { IoHome } from "react-icons/io5";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          <IoHome className="text-xl" />
        </NavLink>
      </li>
      <li>
        <NavLink to="/internationalNews">International News</NavLink>
      </li>
      <li>
        <NavLink to="/business">Business & Economy</NavLink>
      </li>
      <li>
        <NavLink to="/entertainment">Entertainment</NavLink>
      </li>
      <li>
        <NavLink to="/sports">Sports</NavLink>
      </li>
      <li>
        <NavLink to="/culture">Culture</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar justify-between bg-base-100">
        {/* drop down menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-poppins bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* main menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 text-lg  font-poppins text-gray-700">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end justify-end gap-2">
          <img className="w-8" src={user} alt="" />

          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-gray-700 text-white py-1 px-7 rounded-none"
            >
              Log Out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-violet-700 text-white py-1 px-7 rounded-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
