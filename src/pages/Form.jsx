/* import PropTypes from "prop-types";
import { useState } from "react"; */
import Register from "../components/Register.jsx";
import TaskOne from "../components/TaskOne.jsx";
import TaskTwo from "../components/TaskTwo.jsx";
import TaskThree from "../components/TaskThree.jsx";

// eslint-disable-next-line react/prop-types
export const Form = () => {
  return (
    <>
      <section className="task-one">
        <Register></Register>
      </section>
      <section className="task-one">
        <TaskOne></TaskOne>
      </section>
      <section className="task-one">
        <TaskTwo></TaskTwo>
      </section>
      <section className="task-one">
        <TaskThree></TaskThree>
      </section>
    </>
  );
};

export default Form;
