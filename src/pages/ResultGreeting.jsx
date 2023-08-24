/* import {} from "react"; */
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const Greeting = ({ onClickNext, showGreeting, userData }) => {
  Greeting.propTypes = {
    onClickNext: PropTypes.func.isRequired,
    showGreeting: PropTypes.bool.isRequired,
    userData: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      company: PropTypes.string,
    }),
  };
  return (
    <div className="greeting-content">
      <div className={`greeting-wrapper ${showGreeting ? "show-content" : ""}`}>
        <h1>
          {" "}
          Hi <span className="username">{userData.name}</span>!
        </h1>
        <p className="paragraph-1">
          Wow, so you work as <span className="role">{userData.role} </span>
          at <span className="company">{userData.company}</span>. Impressive!
        </p>
        <p className="paragraph-2">
          Thank you <span>{userData.name}</span> for taking the time to do this
          quiz, it means alot to me. I hope you had fun, I sure had. Did you
          know I made it with React, SCSS and alot of coffee?
        </p>
        <p className="result-link">
          Click{" "}
          <button
            onClick={() => {
              onClickNext();
            }}
          >
            HERE
          </button>{" "}
          to see if we are a match!
        </p>
      </div>
    </div>
  );
};

export default Greeting;
