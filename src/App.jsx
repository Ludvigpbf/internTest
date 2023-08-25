import ReactGA from "react-ga";
const TRACKING_ID = "G-YY6R2HSR87"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Landing from "./pages/Landing.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";
import Loading from "./pages/Loading.jsx";
import ResultGreeting from "./pages/ResultGreeting.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [isClicked, setIsClicked] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    role: "",
    company: "",
    email: "",
  });
  const [answersOne, setAnswersOne] = useState([]);
  const [answersTwo, setAnswersTwo] = useState([]);
  const [answersThree, setAnswersThree] = useState([]);
  document.addEventListener("keydown", function (e) {
    // Check if the pressed key is Enter
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action
    }
  });

  useEffect(() => {
    if (checkAnswers) {
      setCheckAnswers(true);
      setTimeout(() => {
        setCheckAnswers(false);
        setShowGreeting(true);
        handleClickNext();
      }, 6000);
    }
  }, [checkAnswers, showGreeting]);

  const handleClickNext = () => {
    setIsClicked(true);
    setShowHeader(true);
    const user = JSON.parse(localStorage.getItem("User")) || {};
    setUserData(user);

    const questionOneData =
      JSON.parse(localStorage.getItem("QuestionOne")) || {};
    const answersOneData = questionOneData?.options || [];
    setAnswersOne(answersOneData);

    const questionTwo = JSON.parse(localStorage.getItem("QuestionTwo")) || {};
    const answersTwoData = questionTwo?.options || [];
    setAnswersTwo(answersTwoData);

    const questionThree =
      JSON.parse(localStorage.getItem("QuestionThree")) || {};
    const answersThreeData = questionThree?.options || [];
    setAnswersThree(answersThreeData);

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
    if (window.innerWidth >= 768) {
      if (pageName === "about") {
        return isClicked ? "right-animation" : "";
      } else if (pageName === "form") {
        return isClicked ? "back-animation" : "";
      } else if (pageName === "loading") {
        return isClicked ? "bottom-animation-desktop" : "";
      } else if (pageName === "result-greeting") {
        return isClicked ? "left-animation" : "";
      } else if (pageName === "finish") {
        return isClicked ? "top-animation-desktop" : "";
      }
    } else {
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
            <About onClickNext={handleClickNext} />
          </section>
          <section className="app-face form">
            <Header />
            <Form
              onClickNext={handleClickNext}
              setCheckAnswers={setCheckAnswers}
            />
          </section>
          <section className="app-face loading">
            <Loading
              onClickNext={handleClickNext}
              checkAnswers={checkAnswers}
            />
          </section>
          <section className="app-face result-greeting">
            <Header />
            <ResultGreeting
              onClickNext={handleClickNext}
              showHeader={showHeader}
              showGreeting={showGreeting}
              userData={userData}
            />
          </section>
          <section className="app-face finish">
            <Finish
              onClickNext={handleClickNext}
              userData={userData}
              answersOne={answersOne}
              answersTwo={answersTwo}
              answersThree={answersThree}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
