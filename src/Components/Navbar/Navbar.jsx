import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/user.png";
import logo from "../../assets/logo-transparent.png";
import { Context } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(Context);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/contactUs"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent z-50 justify-center my-4 container mx-auto ">
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
            className="menu menu-sm dropdown-content font-semibold mx-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to={'/'} className=" hidden lg:flex  items-center">
          <img className="w-16 h-16" src={logo} alt="" />
          <p className="text-2xl font-semibold">Eventify</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-semibold gap-4 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && <p className="font-semibold  mr-2 bg-gray-50 bg-opacity-10">{user.displayName }</p>
        }
        {
          user &&<img className="w-12 mr-4 h-12  rounded-full border-2 border-[#f7897d]" src={user?.photoURL ? user.photoURL : profile} alt="" />
        }
        {user ? (
          <button className="btn btn-error rounded-full text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to={"/signIn "} className="btn rounded-full btn-success w-24  text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
