import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Card = ({ image, heading, summary, buttonText, onButtonClick }) => {
  return (
    <>
      <div
        className="w-[300px] h-[400px] float-left ml-14 bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 
      transition-[2s]" id="cardss">
        <img src={image} alt="" className="w-full h-[200px] object-cover" />
        <h1 className="text-xl font-bold p-4">{heading}</h1>
        <p className=" text-justify mb-5 pl-4 pr-4">{summary}</p>

        <Link
          to={onButtonClick}
          className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 
            focus:ring-orange-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 
            focus:outline-none ml-4"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};

export default Card;
