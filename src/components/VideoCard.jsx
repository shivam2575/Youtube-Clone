import React from "react";
const VideoCard = ({ info }) => {
  if (!info) return null;
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <h3 className="font-bold py-2">{title}</h3>
      <p>{channelTitle}</p>
      <span>{viewCount} views</span>
    </div>
  );
};
export default VideoCard;
