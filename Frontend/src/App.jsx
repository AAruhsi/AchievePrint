import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./Pages/AdminDash";
import CertificatePage from "./Pages/CertificatePage";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/student/dashboard" element={<Home />} />
        <Route path="/certificate/:id" element={<CertificatePage />} />
      </Routes>
    </>
  );
};

export default App;
