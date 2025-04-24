import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="w-48 p-5 shadow-lg">
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
