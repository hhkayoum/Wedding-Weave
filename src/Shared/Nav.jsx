import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logout().then();
  };

  return (
    <div className=" max-w-screen-2xl mx-auto w-full absolute">
      <Navbar fluid rounded className="bg-opacity-10 bg-white z-40">
        <Link to="/">
          <img
            src="https://i.ibb.co/YpTkJyx/Screenshot-2023-11-24-114929-removebg-preview.png"
            className="mr-3 h-6  sm:h-9"
            alt=""
          />
          <span className="self-center whitespace-nowrap text-lg  md:text-xl text-[#836b6c] font-semibold dark:text-white">
            Wedding Weave
          </span>
        </Link>

        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={user.photoURL} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              {isAdmin ? (
                <NavLink to={"/dashboard/adminDashboard"}>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </NavLink>
              ) : (
                <NavLink to={"/dashboard/myProfile"}>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </NavLink>
              )}

              <Dropdown.Divider />
              <Dropdown.Item>
                <button onClick={handleLogout}>Sign out</button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <NavLink to={"/login"}>
              <button
                type="button"
                className="text-[#836B6C] bg-gradient-to-r from-[#836B6C] via-red-300 to-[#BFAEAE] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Login
              </button>
            </NavLink>
          )}
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="text-[#836b6c] md:bg-opacity-10  bg-white ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/biodatas">Biodata</NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>

          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/aboutUsPage">About Us</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
