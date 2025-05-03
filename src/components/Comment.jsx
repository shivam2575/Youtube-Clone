import React from "react";
const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="p-1 md:p-2">
      <div className="flex bg-gray-200 rounded-lg shadow-lg md:m-2 md:p-2 m-1 p-1">
        <img
          className="m-1 h-8 w-8 md:m-2"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm md:text-lg">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
