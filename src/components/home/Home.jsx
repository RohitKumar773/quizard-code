import React from "react";
import Card from "../../Card";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import sliderimage from "../../assets/slider_img.png";
import './home.css';

function Home() {
  return (
    <>
      <div className="w-full h-[600px] float-left" id="mainpage">
        {/* text  */}
        <div className="w-1/2 h-full float-left" id="text">
          <h1 className="text-3xl font-bold pl-28 mt-40">
            Play easy, medium and hard quizes of multiple subjects on single
            platform.
          </h1>
          <h2 className="pl-28 mt-6 leading-8 pr-10 mb-8">
            We are welcoming you on our platform where many people plays quiz
            free of cost. You can easily enroll any quiz and play with great UI
            and customer support. Here you can find many subjects to play.
          </h2>
          <a
            href="#card"
            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 
            focus:ring-orange-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 
            focus:outline-none ml-28"
          >
            Get Started &rarr;
          </a>
        </div>

        {/* image */}
        <div className="w-1/2 h-full float-left" id="image">
          <img src={sliderimage} alt="" />
        </div>
      </div>

      {/* cards area  */}

      <div className="w-full h-auto float-left mt-1" id="card">
        <div className="w-full h-auto float-left">
          <div className="w-full h-12 float-left">
            <p className=" text-2xl font-medium text-center border-b-2" id="title">
              Choose Subject
            </p>
          </div>
          <div className="w-full h-[450px] float-left " id="cards_area">
            <Card
              image={img4}
              heading="HTML Quiz"
              summary="This is chemistry test and this is very hard challenge in the world play very well."
              buttonText="Play Quiz"
              onButtonClick="/htmlquiz"
            />

            <Card
              image={img1}
              heading="CSS Quiz"
              summary="This is chemistry test and this is very hard challenge in the world play very well."
              buttonText="Play Quiz"
              onButtonClick="/cssquiz"
            />

            <Card
              image={img2}
              heading="JavaScript Quiz"
              summary="This is chemistry test and this is very hard challenge in the world play very well."
              buttonText="Play Quiz"
              onButtonClick="/jsquiz"
            />

            <Card
              image={img3}
              heading="BootStrap Quiz"
              summary="This is chemistry test and this is very hard challenge in the world play very well."
              buttonText="Play Quiz"
              onButtonClick="/jsquiz"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
