import PropTypes from "prop-types";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Landing = ({ onClickNext }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="hero">
        <div className="hello">
          <h1>Hello</h1>
          <div className="words">
            <span>Recruiter</span>
            <span>HR manager</span>
            <span>Developer</span>
            <span>You!</span>
            <span>Recruiter</span>
          </div>
        </div>

        <div className="introduction">
          <h1 className="me">
            I&apos;m <span className="first-name">Ludvig Flyckt</span>
          </h1>
          <p className="introduction-text">
            I&apos;m currently studying to become a<br />
            <span className="work-title">Full stack developer</span> and I am
            looking for the best company to do my internship at and/or get a
            part time job. For me, it&apos;s important to be challenged ,
            creative and have a good balance between playfullness and
            professionalism.
            <br /> <br />
          </p>
        </div>
        <div className="continue">
          <p className="match">Are we a match?</p>{" "}
          <button
            className="find-out"
            onClick={() => {
              onClickNext();
              setIsClicked(true);
            }}
          >
            Lets find out!
          </button>
          <span
            className={isClicked ? "landing-line show-line" : "landing-line"}
          ></span>
        </div>
      </div>
      <div className="silhouette">
        <img src="./src/assets/silhoutte3.png" alt="" />
      </div>
    </>
  );
};

Landing.propTypes = {
  onToggleLanding: PropTypes.func.isRequired,
};

export default Landing;
