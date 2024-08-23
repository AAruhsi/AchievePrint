import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import StudentTable from "../components/StudentTable";

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/importFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus("File uploaded successfully.");
    } catch (error) {
      setUploadStatus("Error uploading file. Please try again.");
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
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 space-x-5 ">
          <div className="items-center justify-center text-center shadow py-6 bg-white">
            <main className="">
              <div className="mx-auto max-w-7xl px-4  ">
                <input
                  type="file"
                  accept=".csv, .xlsx"
                  onChange={handleFileChange}
                  className="mt-4 mb-2"
                />
                <button
                  onClick={handleFileUpload}
                  className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700"
                >
                  Upload File
                </button>
                {uploadStatus && (
                  <p className="mt-4 text-red-500">{uploadStatus}</p>
                )}
              </div>
            </main>
          </div>
          <div className=" mx-auto bg-white p-5 mt-6 rounded-sm shadow-md ">
            <StudentTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
