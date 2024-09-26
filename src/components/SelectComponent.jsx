import React from "react";

const SelectComponent = ({ theImg, theName }) => {
  return (
    <div>
      <div className="flex">
        <img src={theImg} alt="" className="" />
        <div className="ml-2 mt-0.5">{theName}</div>
      </div>
    </div>
  );
};

export default SelectComponent;
