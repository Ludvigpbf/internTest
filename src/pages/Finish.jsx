/* import { useEffect, useState } from "react"; */
import Header from "../components/Header.jsx";
import PropTypes from "prop-types";

export const Finish = ({ userData, answersOne, answersTwo, answersThree }) => {
  Finish.propTypes = {
    userData: PropTypes.shape({
      onClickNext: PropTypes.func.isRequired,
      showGreeting: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    answersOne: PropTypes.string.isRequired,
    answersTwo: PropTypes.string.isRequired,
    answersThree: PropTypes.string.isRequired,
  };

  return (
    <>
      <Header />
      <h1 className="result">Result</h1>
      <div className="answers">
        <div className="answers-block question-one">
          <h2 className="question-check">An intern should:</h2>
          <div className="user-box">
            <p className="user">Ludvig:</p>
            <p className="answer">Eager to learn</p>
          </div>
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersOne &&
              answersOne.map((answer, index) => (
                <p className="answer" key={index}>
                  {answer},
                </p>
              ))}
          </div>
        </div>
        <div className="answers-block question-two">
          <h2 className="question-check">Question two</h2>
          <div className="user-box">
            <p className="user">Ludvig:</p>
            <p className="answer">Creative</p>
          </div>
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersTwo &&
              answersTwo.map((answer, index) => (
                <p className="answer" key={index}>
                  {answer}
                </p>
              ))}
          </div>
        </div>
        <div className="answers-block question-three">
          <h2 className="question-check">Question Three</h2>
          <div className="user-box">
            <p className="user">Ludvig:</p>
            <p className="answer">Fun</p>
          </div>
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersThree &&
              answersThree.map((answer, index) => (
                <p className="answer" key={index}>
                  {answer}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="finish-message">
        <h2>Great job, we matched! Send me an email or call me.</h2>
      </div>
      <div className="email">
        <div className="from row">
          <h3>
            <span>from: </span>
            {userData.email}
          </h3>
        </div>
        <div className="to row">
          <h3>
            <span>to: </span> info@ludvigflyckt.com
          </h3>
        </div>
        <div className="subject row">
          <h3>
            <span>about: </span> Intership at {userData.company}
          </h3>
        </div>
        <div className="mail-content-box">
          <p className="mail-content">
            Hi Ludvig! My name is {userData.name} and Im the {userData.role} at{" "}
            {userData.company}
          </p>
        </div>
      </div>
      <button>Send</button>
    </>
  );
};

export default Finish;
