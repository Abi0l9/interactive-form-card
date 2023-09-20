import React from "react";
import Back from "./Back";
import Front from "./Front";

const Card = ({ data }) => {
  const { cvc } = data;

  return (
    <div className="flex flex-col justify-center items-center md:flex-col-reverse md:gap-y-5 py-5 w-full md:h-screen md:w-2/4 ">
      <div className="h-[60%] md:h-screen absolute top-0 left-0 -z-10 w-full md:w-2/6 bg-gradient-to-b md:bg-gradient-to-br from-pink-950 to-rose-900"></div>
      <div className="flex flex-row justify-end md:justify-end md:items-center w-full pr-5 md:pr-0">
        <Back cvc={cvc} />
      </div>
      <div className="flex flex-row justify-start md:justify-center w-full pl-5 md:pl-0 -mt-[80px] md:mt-10">
        <Front data={data} />
      </div>
    </div>
  );
};

export default Card;
