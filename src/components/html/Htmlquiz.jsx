import React, { useRef, useState } from "react";
import { data } from "../../assets/data";
import "../../App.css";
import "./htmlquiz.css";
import ReactConfetti from "react-confetti";
import { NavLink } from "react-router-dom";

const HtmlQuiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let optio_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optio_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      optio_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <>
      <div className="w-full h-calc-100vh-minus-80px float-left flex justify-center items-center overflow-hidden">
        <div
          className=" w-[50%] bg-white border-[2px] rounded-lg h-[76%]"
          id="maincard">
          <div
            className="w-full font-bold text-xl p-4 h-14 bg-slate-100"
            alt="title">
            HTML Quiz
          </div>
          <hr />
          {result ? (
            <></>
          ) : (
            <>
              <div
                className="w-full h-20 text-xl flex justify-center items-center font-medium"
                alt="question"
                id="question">
                <h2>
                  {index + 1}.) {question.question}
                </h2>
              </div>
              <div className="w-full h-[240px]" alt="options">
                <ul className="w-[80%] ml-[10%] h-auto mt-4">
                  <li
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}
                    ref={option1}
                    className="w-full h-10 font-medium border-[2px] hover:cursor-pointer flex justify-center 
              items-center">
                    {question.option1}
                  </li>
                  <li
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}
                    ref={option2}
                    className="w-full h-10 mt-5 font-medium border-[2px] hover:cursor-pointer flex justify-center 
              items-center">
                    {question.option2}
                  </li>
                  <li
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}
                    ref={option3}
                    className="w-full h-10 mt-5 font-medium border-[2px] hover:cursor-pointer flex justify-center 
              items-center">
                    {question.option3}
                  </li>
                  <li
                    onClick={(e) => {
                      checkAns(e, 4);
                    }}
                    ref={option4}
                    className="w-full h-10 mt-5 font-medium border-[2px] hover:cursor-pointer flex justify-center 
              items-center">
                    {question.option4}
                  </li>
                </ul>
              </div>
              <div
                className="w-full h-[50px] flex justify-center items-center"
                alt="submit btn">
                <button
                  onClick={next}
                  className="w-36 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 
            focus:outline-none" type="submit">
                  Submit
                </button>
              </div>
              <h2 className="w-full text-center leading-10">
                {index + 1} of {data.length}
              </h2>
            </>
          )}
          {result ? (
            <>
              <div className="w-full h-[400px] float-left">
                <h2 className="text-center leading-10 font-medium">
                  Total Questions : {data.length}
                </h2>
                <h2 className="text-center leading-10 font-medium">
                  Your Score : {score}
                </h2>
                <h2 className="text-center leading-10 font-medium">
                  Correct Answer : {score}
                </h2>
                <h2 className="text-center leading-10 font-medium">
                  Wrong Answer : {data.length - score}
                </h2>
                <div className="w-full h-[150px] flex justify-center items-center flex-col">
                  <button
                    onClick={reset}
                    className="w-36 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 
            focus:outline-none">
                    Play Again
                  </button>
                  <br />
                  <NavLink
                    to="/winner"
                    className="w-36 text-center text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 
            focus:outline-none">
                    Review Label
                  </NavLink>

                  <ReactConfetti />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default HtmlQuiz;
