import React from "react";
const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="p-2">
      <div className="flex bg-gray-200 rounded-lg shadow-lg m-2 p-2">
        <img
          className="h-8 w-8 m-2"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
        <div className="">
          <p className="font-bold">{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
