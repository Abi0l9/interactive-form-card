import React from "react";
import Back from "./Back";

const Card = ({ data }) => {
  const { cvc, name, number, month, year } = data;
  const formattedMonth = month?.length < 2 ? `0${month}` : month;
  const formattedYear = year?.length < 2 ? `0${year}` : year;
  return (
    <div className="flex flex-col py-5 w-full md:h-screen md:w-2/4 items-center">
      <div className="flex flex-row justify-end md:block w-full pr-5">
        <Back cvc={cvc} />
      </div>
      <div className="flex flex-row md:block justify-start w-full pl-5 md:pl-0 -mt-[70px] md:mt-10">
        <div className="w-3/4 px-7 flex flex-col bg-gray-600 rounded-lg border border-gray-800 pt-5 h-[170px]">
          <div className="flex flex-row w-full items-center">
            <div className="w-[30px] h-[30px] bg-white rounded-full"></div>
            <div className="w-[15px] h-[15px] mx-2 border border-white rounded-full"></div>
          </div>
          <div className="flex flex-col w-full mt-[30px] text-white text-2xl">
            <div className="w-full flex flex-row justify-between">
              <p className="">{number?.slice(0, 4) || `0000`}</p>
              <p className="">{number?.slice(5, 9) || `0000`}</p>
              <p className="">{number?.slice(10, 14) || `0000`}</p>
              <p className="">{number?.slice(15, 19) || `0000`}</p>
            </div>
          </div>
          <div className="flex flex-row mt-4 items-center justify-between">
            <p className="text-white text-sm">
              {name?.toUpperCase() || `JANE APPLESEED`}
            </p>
            <p className="text-white text-sm">
              {formattedMonth || `00`}/{formattedYear || `00`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
