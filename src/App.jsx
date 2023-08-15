import { useState } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";
import Loading from "./pages/Loading.jsx";
import ResultGreeting from "./pages/ResultGreeting.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [showLine, setShowLine] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  const handleClickNext = () => {
    setShowLine(true);
    setIsClicked(true);
    setShowHeader(true);

    if (currentPage === "landing") {
      setCurrentPage("about");
    } else if (currentPage === "about") {
      setCurrentPage("form");
    } else if (currentPage === "form") {
      setCurrentPage("loading");
    } else if (currentPage === "loading") {
      setCurrentPage("result-greeting");
    } else if (currentPage === "result-greeting") {
      setCurrentPage("finish");
    }
  };

  const getPageAnimationClass = (pageName) => {
    if (pageName === "about") {
      return isClicked ? "right-animation" : "";
    } else if (pageName === "form") {
      return isClicked ? "back-animation" : "";
    } else if (pageName === "loading") {
      return isClicked ? "bottom-animation" : "";
    } else if (pageName === "result-greeting") {
      return isClicked ? "left-animation" : "";
    } else if (pageName === "finish") {
      return isClicked ? "top-animation" : "";
    }
    return "";
  };

  const containerAnimationClass = getPageAnimationClass(currentPage);

  window.addEventListener("beforeunload", () => {
    localStorage.clear();
  });

  return (
    <>
      <div className="wrapper">
        <div className={`app-container ${containerAnimationClass}`}>
          <section className="app-face landing">
            <Header />
            <Landing onClickNext={handleClickNext} isClicked={isClicked} />
          </section>
          <section className="app-face about">
            <Header />
            <About onClickNext={handleClickNext} showLine={showLine} />
          </section>
          <section className="app-face form">
            <Header />
            <Form onClickNext={handleClickNext} />
          </section>
          <section className="app-face loading">
            <Loading onClickNext={handleClickNext} />
          </section>
          <section className="app-face result-greeting">
            <Header />
            <ResultGreeting
              onClickNext={handleClickNext}
              showHeader={showHeader}
            />
          </section>
          <section className="app-face finish">
            <Finish onClickNext={handleClickNext} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
