import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // default role
  });
  const [successMessage, setSuccessMessage] = useState("");
  const { name, email, password, role } = formData;
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      setSuccessMessage("Signup successful! Please log in.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error("Registration failed:", err.response.data);
    }
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <iframe
          src="https://my.spline.design/abstractgradientbackground-c4db248de7ad466d4b404aa633270b52/"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full -z-10"
          allowFullScreen
        ></iframe>
        <Navbar />
        <div className="h-[80vh] flex justify-center items-center">
          <div className="w-[600px]">
            <div className="modal-box">
              <form onSubmit={onSubmit}>
                <Link
                  to="/"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </Link>

                <h3 className="font-bold text-lg">SignUp</h3>
                {successMessage && (
                  <div className="alert">{successMessage}</div>
                )}
                <div className="my-2">
                  <span>Name</span>
                  <br />
                  <input
                    placeholder="Enter your Name"
                    className="w-full px-2 py-1 border rounded-md mt-1"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
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
                <div className="flex gap-10 justify-between mt-2 items-center">
                  <button
                    className="bg-pink-500 text-white rounded-lg py-1 px-3 mt-3 hover:bg-pink-700"
                    type="submit"
                  >
                    SignUp
                  </button>
                  <span>
                    Already have an account?{" "}
                    <Link to="/" className="underline text-blue-400">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
