import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_URL);
    const json = await response.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
