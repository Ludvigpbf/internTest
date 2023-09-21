import github from "../assets/github.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import phone from "../assets/phone.png";
import Header from "../components/Header.jsx";
import PropTypes from "prop-types";

export const Finish = ({ userData, answersOne, answersTwo, answersThree }) => {
  Finish.propTypes = {
    userData: PropTypes.shape({
      onClickNext: PropTypes.func,
      showGreeting: PropTypes.bool,
      name: PropTypes.string,
      role: PropTypes.string,
      company: PropTypes.string,
      email: PropTypes.string,
    }),
    answersOne: PropTypes.arrayOf(PropTypes.string),
    answersTwo: PropTypes.arrayOf(PropTypes.string),
    answersThree: PropTypes.arrayOf(PropTypes.string),
  };

  const getFinishMessage = () => {
    const isWrongAnswersSelected =
      answersOne.includes("Ignore feedback") ||
      answersTwo.includes("Free labor") ||
      answersThree.includes("Grumpy");

    const isCorrectAnswersSelected =
      (answersOne.includes("Be eager to learn") ? 1 : 0) +
      (answersOne.includes("Seek self-directed learning") ? 1 : 0) +
      (answersOne.includes("Prefer a creative environment") ? 1 : 0) +
      (answersTwo.includes("Provide clear expectations") ? 1 : 0) +
      (answersTwo.includes("Have a creative environment") ? 1 : 0) +
      (answersTwo.includes("Offer experienced mentors") ? 1 : 0) +
      (answersThree.includes("Communicative") ? 1 : 0) +
      (answersThree.includes("Reliable") ? 1 : 0) +
      (answersThree.includes("Organized") ? 1 : 0);

    // Handle different cases and return the appropriate message
    if (isWrongAnswersSelected && isCorrectAnswersSelected > 0) {
      return "We might not look eye to eye on everything.. but hey, give me a holler!";
    } else if (!isWrongAnswersSelected && isCorrectAnswersSelected === 9) {
      return "Wow spot on! Looks like a perfect fit! Please contact me so we can set up a meeting.";
    } else if (
      !isWrongAnswersSelected &&
      isCorrectAnswersSelected < 9 &&
      isCorrectAnswersSelected > 0
    ) {
      return "Maby not 10 of 10 but I like the odds! Please contact me so we can set up a meeting.";
    } else if (isWrongAnswersSelected && isCorrectAnswersSelected === 0) {
      return "We really don't match. You may need to reconsider some things..";
    } else {
      return "Seems something went wrong, please try again.";
    }
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
            <p className="answer">Be eager to learn,</p>
            <p className="answer">Seek self-directed learning,</p>
            <p className="answer">Prefer a creative environment,</p>
          </div>
          <Header />
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersOne &&
              answersOne.map((answer, index) => (
                <p
                  className={`answer ${
                    "Ignore feedback".includes(answer)
                      ? "wrong-answer"
                      : "correct-answer"
                  }`}
                  key={index}
                >
                  {answer},
                </p>
              ))}
          </div>
        </div>
        <div className="answers-block question-two">
          <h2 className="question-check">An internship should:</h2>
          <div className="user-box">
            <p className="user">Ludvig:</p>
            <p className="answer">Provide clear expectations,</p>
            <p className="answer">Have a creative environment,</p>
            <p className="answer">Offer experienced mentors,</p>
          </div>
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersTwo &&
              answersTwo.map((answer, index) => (
                <p
                  className={`answer ${
                    "Free labor".includes(answer)
                      ? "wrong-answer"
                      : "correct-answer"
                  }`}
                  key={index}
                >
                  {answer},
                </p>
              ))}
          </div>
        </div>
        <div className="answers-block question-three">
          <h2 className="question-check">Important qualitys are:</h2>
          <div className="user-box">
            <p className="user">Ludvig:</p>
            <p className="answer">Communicative,</p>
            <p className="answer">Reliable,</p>
            <p className="answer">Organized,</p>
          </div>
          <div className="user-box">
            <p className="user">{userData.company}:</p>
            {answersThree &&
              answersThree.map((answer, index) => (
                <p
                  className={`answer ${
                    "Grumpy".includes(answer)
                      ? "wrong-answer"
                      : "correct-answer"
                  }`}
                  key={index}
                >
                  {answer},
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="finish-message">
        <h2>{getFinishMessage()}</h2>
      </div>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/ludvigflyckt"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a href="https://github.com/Ludvigpbf" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" />
        </a>

        <a href="mailto:ludvig.flyckt@gmail.com">
          <img src={mail} alt="Email" />
        </a>

        <a href="tel:+46707983878">
          <img className="phone" src={phone} alt="Phone" />
        </a>
      </div>
    </>
  );
};

export default Finish;
