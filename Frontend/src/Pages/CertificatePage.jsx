import React, { useRef, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Certificateimage from "../../public/Certificate.png";
import { toPng } from "html-to-image";
import useAuth from "../context/AuthContext";
import Navbar from "../components/Navbar";
const CertificatePage = () => {
  const location = useLocation();
  const { certificateData } = location.state;
  const { logout } = useAuth;
  const [id, setID] = useState(certificateData.id);
  const [name, setName] = useState(certificateData.name);
  const [startDate, setStartDate] = useState(
    new Date(certificateData.start_date).toLocaleDateString()
  );
  const [endDate, setEndDate] = useState(
    new Date(certificateData.end_date).toLocaleDateString()
  );
  const [domain, setDomain] = useState(certificateData.domain);

  const ref = useRef(null);
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "certificate.png";
        link.href = dataUrl;
        link.click();

        logout();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  if (!certificateData) {
    return <p>No certificate data found.</p>;
  }

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
        <div className="container mx-auto p-6">
          <div className="flex justify-center items-start gap-10 mx-9">
            <div className=" ">
              <div className="bg-white w-[30vw] shadow-lg rounded-lg p-6 mb-6 ">
                {/* Editable fields */}
                <div className="mb-4">
                  <label
                    className="block text-lg font-semibold mb-2 text-pink-500"
                    htmlFor="certificateId"
                  >
                    Certificate ID:
                  </label>
                  <input
                    id="certificateId"
                    type="text"
                    value={id}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-semibold mb-2 text-pink-500"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-semibold mb-2 text-pink-500"
                    htmlFor="startDate"
                  >
                    Start Date:
                  </label>
                  <input
                    id="startDate"
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-lg font-semibold mb-2 text-pink-500"
                    htmlFor="endDate"
                  >
                    End Date:
                  </label>
                  <input
                    id="endDate"
                    type="text"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label
                    className="block text-lg font-semibold mb-2 text-pink-500"
                    htmlFor="domain"
                  >
                    Details:
                  </label>
                  <input
                    id="domain"
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  <button
                    className="btn btn-secondary  w-full mt-2 md:mt-3 ml-4 md:ml-0"
                    onClick={onButtonClick}
                  >
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>

            <div
              className="relative bg-white text-black w-full max-w-[800px] mx-auto "
              ref={ref}
            >
              <img
                src={Certificateimage}
                alt="Certificate"
                className="w-full h-auto rounded-lg border-2"
              />
              <p className="absolute font-bold text-5xl top-[40%] left-[50%] transform -translate-x-1/2 text-center w-full">
                {name}
              </p>
              <p className="absolute font-semibold text-sm top-[51%] left-[53%] transform -translate-x-1/2 text-center w-full">
                {domain}
              </p>
              <p className="absolute font-semibold text-sm top-[55%] left-[37%] transform -translate-x-1/2 text-center">
                {startDate}
              </p>
              <p className="absolute font-semibold text-sm top-[55%] left-[52%] transform -translate-x-1/2 text-center">
                {endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificatePage;
