import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Banner = () => {
  const [certificateId, setCertificateId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGenerateCertificate = async () => {
    if (!certificateId) {
      setError("Please enter a certificate ID.");
      return;
    }

    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/generate/view/${certificateId}`
      );

      const certificateData = {
        id: response.data._id,
        name: response.data.student_name,
        start_date: response.data.start_date,
        domain: response.data.domain,
        end_date: response.data.end_date,
      };

      navigate(`/certificate/${certificateId}`, {
        state: { certificateData },
      });
    } catch (err) {
      console.error("Error fetching certificate data: ", err);
      setError("Failed to fetch certificate data.");
    }
  };

  return (
    <div className="flex items-center justify-start ">
      <div className=" pb-8 h-[20vh] rounded-lg  text-center ">
        <h1 className="text-[7vh] font-bold  drop-shadow-lg text-white ">
          Unlock Your Achievements in an Instant
        </h1>
        <p className="text-lg ">
          Generate, Customize, and Share Certificates with Ease!
        </p>
        <div className="flex flex-col items-center justify-center space-y-5 mt-5 ">
          <input
            type="text"
            className="w-[40vw] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter Certificate ID"
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />
          <button
            onClick={handleGenerateCertificate}
            className="w-[15vw] py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
          >
            Generate Certificate
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
