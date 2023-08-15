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
        <h1>An intern should be..</h1>
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <div className="question">
            <div className="checkboxes">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option1"
                  checked={answers.options.includes("option1")}
                  onChange={() => handleOptionChange("option1")}
                />
                <span>Initiative</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option2"
                  checked={answers.options.includes("option2")}
                  onChange={() => handleOptionChange("option2")}
                />
                <span>Eager to learn</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option3"
                  checked={answers.options.includes("option3")}
                  onChange={() => handleOptionChange("option3")}
                />
                <span>Organized</span>
              </label>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="option4"
                  checked={answers.options.includes("option4")}
                  onChange={() => handleOptionChange("option4")}
                />
                <span>Fun</span>
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
