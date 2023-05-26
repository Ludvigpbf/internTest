import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import TaskOne from "./pages/TaskOne.jsx";
import TaskTwo from "./pages/TaskTwo.jsx";
import TaskThree from "./pages/TaskThree.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  const [showLanding, setShowLanding] = useState(true);
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
  }, []);

  return (
    <>
      <Header />
      <div
        className={`app-container ${showLanding ? "slide-in" : "slide-up"}`}
        onClick={handleClick}
      >
        {isClicked && (
          <div
            className="custom-cursor cursor-click-animation"
            style={{
              left: cursorPosition.x + "px",
              top: cursorPosition.y + "px",
            }}
          />
        )}
        <section className="landing">
          {showLanding && <Landing onToggleLanding={handleToggleLanding} />}
        </section>
        {showAbout && (
          <section className="about">
            <About onToggleTasks={handleToggleTasks} />
          </section>
        )}
        {showTasks && (
          <>
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
          </>
        )}
      </div>

      {/* <span className="neon-line"></span> */}
    </>
  );
}

export default App;
