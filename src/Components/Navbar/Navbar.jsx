import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handelLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const link = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addhabit"}>
          <a>Add Habit</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allhabits"}>Browse Public Habit</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/myhabits"}>My Habits</NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <p>
              Habit<span className="text-green-700">Tracks</span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 -mx-24 shadow"
            >
              {link}
              {user ? (
                <>
                  {" "}
                  <li>
                    <NavLink to={"/"}>
                      <a onClick={handelLogout}>SignOut</a>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to={"/login"}>
                      <a>Login</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/register"}>
                      <a>Register</a>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {user ? (
            <>
              <div className="flex gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={
                          user?.photoURL ||
                          "https://i.ibb.co.com/Hpgsxbxm/profile.png"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={handelLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
              <NavLink to={"/"}>
                <button
                  className="btn btn-outline max-lg:hidden"
                  onClick={handelLogout}
                >
                  SignOut
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>
                <button className="btn btn-outline max-lg:hidden">Login</button>
              </NavLink>
              <NavLink
                to={"/register"}
                className="btn btn-outline btn-primary max-lg:hidden"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
