import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import axios from "axios";
const StudentDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4 space-x-3 dark:bg-slate-900 dark:text-white">
        <div className="items-center justify-center text-center pt-28">
          <h1 className=" text-2xl md:text-4xl font-bold">
            Welcome to the Student Dashboard
            <span className="text-pink-500 ">here!</span>
          </h1>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default StudentDashboard;
