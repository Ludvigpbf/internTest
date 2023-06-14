import { useState } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";
import Loading from "./pages/Loading.jsx";
import ResultGreeting from "./pages/ResultGreeting.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
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
            <About onClickNext={handleClickNext} showLine={showLine} />
          </section>
          <section className={`app-face form ${next ? "form-animation" : ""}`}>
            <Header />
            <Form onClickNext={handleClickNext} />
          </section>
          <section className="app-face loading">
            <Header />
            <Loading />
          </section>
          <section className="app-face result-greeting">
            <Header />
            <ResultGreeting />
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
