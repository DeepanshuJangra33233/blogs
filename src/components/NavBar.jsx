import React, { useState } from "react";
import DropDown from "./common/DropDown";
import { EditIcon, SearchIcon } from "./common/Icons";
import { Link } from "react-router-dom";
const NavBar = () => {
  const filterList = ["Dummy", "Dummy", "Dummy"];
  const languageList = ["English", "Hindi", "Chinese"];
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#E8F3F3] py-4 md:pt-[24px] md:pb-[20px]">
      <div className="max-w-[1296px] mx-auto px-3 hidden items-center justify-between md:flex">
        <div className="flex items-center gap-8">
          <DropDown title="Homepage" right={true} filterList={filterList} />
          <button className="text-[15px] text-[#333333] font-medium">
            About
          </button>
          <DropDown title="Category" right={true} filterList={filterList} />
          <DropDown title="Pages" right={true} filterList={filterList} />
        </div>
        <Link to={"/"}>
          <span className="text-white bg-[#00AAA1] text-[27px] font-bold">
            Note
          </span>
          <span className="text-[17px] text-black font-semibold">Book</span>
        </Link>
        <div className="flex items-center gap-8">
          <button>
            <SearchIcon />
          </button>
          <button>
            <EditIcon />
          </button>
          <button className="text-[15px] text-[#333333] font-medium">
            Contact
          </button>
          <DropDown title="En" right={false} filterList={languageList} />
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden px-2">
        <button>
          <span className="text-white bg-[#00AAA1] text-[27px] font-bold">
            Note
          </span>
          <span className="text-[17px] text-black font-semibold">Book</span>
        </button>
        <div className="flex items-center gap-3">
          <button>
            <SearchIcon />
          </button>
          <button>
            <EditIcon />
          </button>
          <div
            className="flex items-center flex-col gap-1 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="bg-black h-[3px] w-[30px]"></span>
            <span className="bg-black h-[3px] w-[30px]"></span>
            <span className="bg-black h-[3px] w-[30px]"></span>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-[72px] w-full bg-white h-[calc(100vh-72px)] z-20 flex items-center justify-center duration-300 md:hidden ${
          open ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-center flex-col gap-8">
          <DropDown title="Homepage" right={true} filterList={filterList} />
          <button className="text-[15px] text-[#333333] font-medium">
            About
          </button>
          <DropDown title="Category" right={true} filterList={filterList} />
          <DropDown title="Pages" right={true} filterList={filterList} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
