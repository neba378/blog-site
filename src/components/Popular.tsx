import React from "react";
import Card from "./Card";
import { Button } from "./ui/button";

const Popular = () => {
  return (
    <>
      <div className="main-section">
        <div className="top flex flex-row justify-between items-center px-8 lg:px-[80px] py-5">
          <h1 className="left text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Popular Posts
          </h1>
          <Button
            variant="secondary"
            className="bg-primaryPurple text-white rounded-[15px] py-8 px-10 hover:bg-primaryPurple/80 transition-all duration-300 ease-in-out"
          >
            <h6>View all</h6>
          </Button>
        </div>
        <div className="bottom-cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 px-8 lg:px-[80px] ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Popular;
