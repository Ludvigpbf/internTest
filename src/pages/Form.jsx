import { useState } from "react";
import Register from "../components/Register.jsx";
import TaskOne from "../components/TaskOne.jsx";
import TaskTwo from "../components/TaskTwo.jsx";
import TaskThree from "../components/TaskThree.jsx";

// eslint-disable-next-line react/prop-types
export const Form = ({ onClickNext }) => {
  const [formClass, setFormClass] = useState("");

  const handleFormClass = (className) => {
    setFormClass(className);
  };

  const handleNextButton = () => {
    if (formClass === "") {
      handleFormClass("question-one");
    } else if (formClass === "question-one") {
      handleFormClass("question-two");
    } else if (formClass === "question-two") {
      handleFormClass("question-three");
    }
  };

  return (
    <div className={`form-container ${formClass}`}>
      <section className="register">
        <Register nextQuestion={(className) => handleNextButton(className)} />
      </section>
      <section className="task-one">
        <TaskOne nextQuestion={(className) => handleNextButton(className)} />
      </section>
      <section className="task-two">
        <TaskTwo nextQuestion={(className) => handleNextButton(className)} />
      </section>
      <section className="task-three">
        <TaskThree onClickNext={onClickNext} />
      </section>
    </div>
  );
};

export default Form;
