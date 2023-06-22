import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TaskTwo = ({ nextQuestion }) => {
  const [answers, setAnswers] = useState({
    options: [],
  });

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
    console.log("Questionnaire answers:", answers);
    nextQuestion();
  };

  return (
    <>
      <div className="container">
        <h1>We want..</h1>
        <form className="questionnaire-form" onSubmit={handleSubmit}>
          <div className="question">
            <p>Select options:</p>
            <label>
              <input
                type="checkbox"
                name="option1"
                checked={answers.options.includes("option1")}
                onChange={() => handleOptionChange("option1")}
              />
              Option 1
            </label>
            <label>
              <input
                type="checkbox"
                name="option2"
                checked={answers.options.includes("option2")}
                onChange={() => handleOptionChange("option2")}
              />
              Option 2
            </label>
            <label>
              <input
                type="checkbox"
                name="option3"
                checked={answers.options.includes("option3")}
                onChange={() => handleOptionChange("option3")}
              />
              Option 3
            </label>
            <label>
              <input
                type="checkbox"
                name="option3"
                checked={answers.options.includes("option3")}
                onChange={() => handleOptionChange("option3")}
              />
              Option 4
            </label>
            <label>
              <input
                type="text"
                name="option4"
                checked={answers.options.includes("option3")}
                onChange={() => handleOptionChange("option3")}
              />
            </label>
          </div>
          <button type="submit">Next</button>
        </form>
        <h2>3/4</h2>
      </div>
    </>
  );
};

export default TaskTwo;
