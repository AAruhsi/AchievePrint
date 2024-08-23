import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../context/AuthContext";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const logoutFunc = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className="pt-7 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold ml-10">
          <Link to="/">AchievePrint</Link>
        </div>
        <div>
          {isAuthenticated ? (
            <button
              className="bg-gray-800 text-white px-4 py-2 mr-10 rounded hover:bg-red-700"
              onClick={logoutFunc}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="bg-pink-500 text-white px-4 py-2 mr-10 rounded hover:bg-pink-700"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
