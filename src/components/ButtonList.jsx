import React from "react";
import { FILTER_LIST } from "../utils/constants";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="p-2 m-2">
      {FILTER_LIST.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
