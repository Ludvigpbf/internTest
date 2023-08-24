import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TaskThree = ({ onClickNext, setCheckAnswers }) => {
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
    localStorage.setItem("QuestionThree", JSON.stringify(answers));
    setCheckAnswers(true);
  };

  return (
    <div className="container">
      <h1>Important qualitys are...</h1>
      <form className="questionnaire-form" onSubmit={handleSubmit}>
        <div className="question">
          <div className="checkboxes">
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="option1"
                checked={answers.options.includes("Communicative")}
                onChange={() => handleOptionChange("Communicative")}
              />
              <span>Communicative</span>
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="option2"
                checked={answers.options.includes("Reliable")}
                onChange={() => handleOptionChange("Reliable")}
              />
              <span>Reliable</span>
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="option3"
                checked={answers.options.includes("Organized")}
                onChange={() => handleOptionChange("Organized")}
              />
              <span>Organized</span>
            </label>
            <label className="custom-checkbox">
              <input
                type="checkbox"
                name="fun"
                checked={answers.options.includes("Grumpy")}
                onChange={() => handleOptionChange("Grumpy")}
              />
              <span>Grumpy</span>
            </label>
          </div>
        </div>
        {formSubmitted && (
          <p className="alert-text">
            Please select at least one option before proceeding.
          </p>
        )}
        <button
          onClick={() => {
            if (answers.options.length > 0) {
              onClickNext();
            }
          }}
        >
          Submit
        </button>
      </form>
      <h2>4/4</h2>
    </div>
  );
};

export default TaskThree;
