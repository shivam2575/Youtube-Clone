import React from "react";
import SideBar from "./SideBar";
import Body from "./Body";
import { useSelector } from "react-redux";
const MainContainer = () => {
  const showSidebarMenu = useSelector((store) => store.app.isMenuOpen);
  console.log(showSidebarMenu);
  return (
    <>
      <div className="flex">
        {showSidebarMenu && <SideBar />}
        <Body />
      </div>
    </>
  );
};
export default MainContainer;
