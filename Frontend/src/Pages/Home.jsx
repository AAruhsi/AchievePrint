import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <iframe
        src="https://my.spline.design/abstractgradientbackground-c4db248de7ad466d4b404aa633270b52/"
        frameBorder="0"
        className="absolute top-0 left-0 w-full h-full -z-10"
        allowFullScreen
      ></iframe>
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[80vh] px-4  mt-[-10vh]">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
