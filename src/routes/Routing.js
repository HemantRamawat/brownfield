import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/admin/Dashboard";
import FlightManagement from "../pages/admin/Flights"
import Passengers from "../pages/admin/Passengers";
import Bookings from "../pages/admin/Bookings"

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flightmanagement" element={<FlightManagement />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/passengers" element={<Passengers />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
