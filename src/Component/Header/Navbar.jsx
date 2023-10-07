import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li className="font-poppins font-medium text-base hover:underline">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline bg-white bg-opacity-90"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-poppins text-base font-medium hover:underline">
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline bg-white bg-opacity-90"
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li className="font-poppins text-base font-medium hover:underline">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline bg-white bg-opacity-90"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="font-poppins text-base font-medium hover:underline">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#FF444A] underline bg-white bg-opacity-90"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const user = false;
  return (
    <div className="w-full bg-black bg-opacity-75 text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center py-3 ">
        <div className="">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="text-xl md:text-3xl italic font-bold">
            <span className="text-[#FF444A] font-poppins not-italic md:text-4xl">
              Milon
            </span>{" "}
            Event
          </a>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>User</p>
              </li>
              <li>
                <button className="btn btn-sm  btn-ghost">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="">
            <button className=" py-2 px-5 bg-[#FF444A] font-poppins font-medium rounded-md text-white">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
