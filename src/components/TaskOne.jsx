import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TaskOne = ({ nextQuestion }) => {
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
    localStorage.setItem("QuestionOne", JSON.stringify(answers));
    nextQuestion();
  };
  return (
    <>
      {" "}
      <div className="container">
        <h1>An intern should...</h1>
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <div className="question">
            <div className="checkboxes">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option1"
                  checked={answers.options.includes("Be eager to learn")}
                  onChange={() => handleOptionChange("Be eager to learn")}
                />
                <span>be eager to learn from experienced professionals.</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option2"
                  checked={answers.options.includes(
                    "Seek self-directed learning"
                  )}
                  onChange={() =>
                    handleOptionChange("Seek self-directed learning")
                  }
                />
                <span>
                  seek self-directed learning with occasional guidance.
                </span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option3"
                  checked={answers.options.includes("Ignore feedback")}
                  onChange={() => handleOptionChange("Ignore feedback")}
                />
                <span>ignore feedback and suggestions from colleagues.</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option4"
                  checked={answers.options.includes(
                    "Prefer a creative environment"
                  )}
                  onChange={() =>
                    handleOptionChange("Prefer a creative environment")
                  }
                />
                <span>
                  prefer a work environment that is collaborative and creative.
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
        <h2>2/4</h2>
      </div>
    </>
  );
};

export default TaskOne;
