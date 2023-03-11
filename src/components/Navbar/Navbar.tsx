import React, { useState } from "react";
import { WiCloudUp } from "react-icons/wi";
import { CiMenuBurger } from "react-icons/ci";

import NavButton from "../Buttons/NavButton";
import InternalLinks from "./InternalLinks";
import DropDown from "./DropDown";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-14 bg-primaryColor flex justify-between items-center font-spacegrotesk font-semibold px-4 my-0">
      <WiCloudUp className="text-secondaryColor text-6xl" />
      <InternalLinks />
      <CiMenuBurger
        className="flex sm:hidden text-secondaryColor font-bold text-2xl cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      />
      <NavButton text="About" />
      {openMenu && <DropDown />}
    </div>
  );
};

export default Navbar;
