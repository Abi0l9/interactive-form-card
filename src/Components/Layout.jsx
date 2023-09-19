import React, { useState } from "react";
import Card from "./Card";
import CardForm from "./CardForm";

const Layout = () => {
  const [cardData, setCardData] = useState({});

  const getCardDetails = (details) => {
    console.log(details);
    setCardData(details);
  };

  return (
    <div className="flex flex-col md:flex-row gap-x-6 w-full h-screen">
      <Card cardData={cardData} data={cardData} />
      <CardForm getCardDetails={getCardDetails} />
    </div>
  );
};

export default Layout;
