import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <img
          className="h-8 mx-2 cursor-pointer"
          src="https://cdnlogo.com/logos/y/73/youtube.svg"
          alt="logo"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          className="border border-gray-400 p-2 w-1/2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-2 bg-gray-200 rounded-r-full cursor-pointer">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Navbar;
