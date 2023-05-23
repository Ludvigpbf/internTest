import { useState } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import TaskOne from "./pages/TaskOne.jsx";
import TaskTwo from "./pages/TaskTwo.jsx";
import TaskThree from "./pages/TaskThree.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const handleToggleAbout = () => {
    setIsAboutVisible((prevVisible) => !prevVisible);
  };
  return (
    <>
      <Header />
      <section className="landing">
        <Landing onToggleAbout={handleToggleAbout} />
      </section>
      <section className="about">{isAboutVisible && <About />}</section>
      <section className="first-task">
        <TaskOne />
      </section>
      <section className="second-task">
        <TaskTwo />
      </section>
      <section className="third-task">
        <TaskThree />
      </section>
      <section className="finish">
        <Finish />
      </section>
      {/* <span className="neon-line"></span> */}
    </>
  );
}

export default App;
