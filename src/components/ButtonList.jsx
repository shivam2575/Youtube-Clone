import React from "react";
import { FILTER_LIST } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="p-1 m-1 text-sm md:text-lg md:p-2 md:m-2 overflow-x-scroll flex">
      {FILTER_LIST.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
