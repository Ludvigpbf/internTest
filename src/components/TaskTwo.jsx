import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TaskTwo = ({ nextQuestion }) => {
  const [answers, setAnswers] = useState({
    options: [],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOptionChange = (option) => {
    if (answers.options.includes(option)) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        options: prevAnswers.options.filter((item) => item !== option),
      }));
    } else {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        options: [...prevAnswers.options, option],
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answers.options.length === 0) {
      setFormSubmitted(true);
      return;
    }
    console.log("Questionnaire answers:", answers);
    localStorage.setItem("QuestionTwo", JSON.stringify(answers));
    nextQuestion();
  };

  return (
    <>
      <div className="container">
        <h1>An internship should...</h1>
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <div className="question">
            <div className="checkboxes">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option1"
                  checked={answers.options.includes(
                    "Provide clear expectations"
                  )}
                  onChange={() =>
                    handleOptionChange("Provide clear expectations")
                  }
                />
                <span>
                  provide interns with structured training and clear
                  expectations.
                </span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option2"
                  checked={answers.options.includes("Free labor")}
                  onChange={() => handleOptionChange("Free labor")}
                />
                <span>take advantage of the free labor of interns.</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option3"
                  checked={answers.options.includes(
                    "Have a creative environment"
                  )}
                  onChange={() =>
                    handleOptionChange("Have a creative environment")
                  }
                />
                <span>
                  create a work environment that is creative and open to
                  experimentation.
                </span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option4"
                  checked={answers.options.includes(
                    "Offer experienced mentors"
                  )}
                  onChange={() =>
                    handleOptionChange("Offer experienced mentors")
                  }
                />
                <span>
                  offer interns the opportunity to benefit from experienced
                  mentors and available resources.
                </span>
              </label>
            </div>
          </div>
          {formSubmitted && (
            <p className="alert-text">
              Please select at least one option before proceeding.
            </p>
          )}
          <button type="submit">Next</button>
        </form>
        <h2>3/4</h2>
      </div>
    </>
  );
};

export default TaskTwo;
