import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="absolute bg-white h-screen text-sm md:text-lg md:static md:w-48 p-5 z-10 md:z-0 shadow-lg">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
