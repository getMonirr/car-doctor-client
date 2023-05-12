import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import CdButton from "../../../components/CdButton";
import { useAuth } from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogOut = () => {
    logoutUser()
      .then((result) => {
        if (result) {
          Swal.fire("Login successful", "Welcome back", "success");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${err?.message}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/Blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/bookings">Bookings</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hover:bg-transparent md:h-20 h-4"
        >
          <img className="md:h-20 h-10" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link>
          <HiOutlineShoppingBag size={20} />
        </Link>
        <Link>
          <FiSearch size={20} />
        </Link>
        {user ? (
          <CdButton handleClick={handleLogOut}>Log out</CdButton>
        ) : (
          <>
            <Link>
              <CdButton>Appointment</CdButton>
            </Link>
            <Link to="/login">
              <CdButton>Log in</CdButton>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
