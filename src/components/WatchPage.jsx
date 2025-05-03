import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(hideMenu());
  }, []);
  return (
    <div className="overflow-x-hidden flex flex-col w-full">
      <div className="md:p-2 md:m-2 rounded-lg flex flex-col md:flex-row w-full">
        <div className="mb-2 pb-2 h-56 md:pb-0 md:mb-0">
          <iframe
            className="md:rounded-lg w-full h-full md:w-[1000px] md:h-[500px]"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};
export default WatchPage;
