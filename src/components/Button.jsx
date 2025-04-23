import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className="px-3 py-1 m-2 bg-gray-200 rounded-lg cursor-pointer">
        {name}
      </button>
    </>
  );
};

export default Button;
