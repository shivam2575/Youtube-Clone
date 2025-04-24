import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const MainContainer = () => {
  const showSidebarMenu = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <div className="flex">
        {showSidebarMenu && <SideBar />}
        <Outlet />
      </div>
    </>
  );
};
export default MainContainer;
