import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { login } = useAuth();
  const { email, password } = formData;
  const navigate = useNavigate();

  const hardCodedAdmin = {
    email: "admin@example.com",
    password: "admin123",
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      email === hardCodedAdmin.email &&
      password === hardCodedAdmin.password
    ) {
      // Admin login
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login/admin",
          { email, password }
        );

        localStorage.setItem("token", response.data.token);
        login("admin");
        navigate("/admin/dashboard");
      } catch (err) {
        setError("Invalid admin credentials");
      }
    } else {
      // Student login (or other user roles)

      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        localStorage.setItem("token", response.data.token);
        login("student");
        navigate("/student/dashboard");
      } catch (err) {
        setError("Invalid credentials");
      }
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={onSubmit}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {error && <p className="text-red-500">{error}</p>}
            <div className="my-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full px-2 py-1 border rounded-md mt-1"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="my-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-2 py-1 border rounded-md mt-1"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <button
                className="bg-pink-500 text-white rounded-lg py-1 px-3 mt-3 hover:bg-pink-700"
                type="submit"
              >
                Login
              </button>
              <span className="">
                Not registered?{" "}
                <a
                  href="/signup"
                  className="underline text-blue-400 cursor-pointer"
                >
                  SignUp
                </a>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
