import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const Body = () => {
  return (
    <>
      <div className="bg-gray-600 w-full">
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export default Body;
