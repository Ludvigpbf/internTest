import { useState } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  /* const [showLanding, setShowLanding] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleToggleLanding = () => {
    setShowLanding(false);
    setShowAbout(true);
  };
  const handleToggleTasks = () => {
    setShowTasks(true);
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500); // Adjust the duration based on your animation timing
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); */

  const [next, setNext] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const handleClickNext = () => {
    setNext((prevNext) => !prevNext);
    setShowLine(true);
  };

  return (
    <>
      <div className="wrapper">
        <div className="app-container">
          <section
            className={`app-face landing ${next ? "landing-animation" : ""}`}
          >
            <Header />
            <Landing onClickNext={handleClickNext} />
          </section>
          <section
            className={`app-face about ${next ? "about-animation" : ""}`}
          >
            <Header />
            <About showLine={showLine} />
          </section>
          <section className="app-face form">
            <Header />
            <Form />
          </section>
          <section className="app-face finish">
            <Header />
            <Finish />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
