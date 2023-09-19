import React from "react";

const Back = ({ cvc }) => {
  return (
    <div className=" md:relative w-full w-3/4 rounded-lg border border-gray-800 pt-5 h-[170px]">
      <div className="w-full bg-gray-800 h-[30px]"></div>
      <div className="w-3/4 bg-gray-400 mx-auto flex flex-col items-end justify-center rounded-md h-[30px] mt-5">
        <p className="text-gray-200  text-sm pr-2">{cvc || `000`}</p>
      </div>
    </div>
  );
};

export default Back;
