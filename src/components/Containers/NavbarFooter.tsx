import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const NavbarFooter = () => {
  return (
    <div className="min-h-screen bg-backgroundColor">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default NavbarFooter;
