import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
export const Finish = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [answersOne, setAnswersOne] = useState("");
  const [answersTwo, setAnswersTwo] = useState("");
  const [answersThree, setAnswersThree] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    const name = user?.name || "";
    const role = user?.role || "";
    const company = user?.company || "";
    const email = user?.email || "";

    setUsername(name);
    setRole(role);
    setCompany(company);
    setEmail(email);

    const questionOneData = JSON.parse(localStorage.getItem("QuestionOne"));
    const answersOneData = questionOneData?.options || "your answer";
    const questionTwo = JSON.parse(localStorage.getItem("QuestionTwo"));
    const answersTwoData = questionTwo?.options || "";
    const questionThree = JSON.parse(localStorage.getItem("QuestionThree"));
    const answersThreeData = questionThree?.options || "";

    setAnswersOne(answersOneData);
    setAnswersTwo(answersTwoData);
    setAnswersThree(answersThreeData);
  }, []);
  return (
    <>
      <Header />
      <h1 className="result">Result</h1>
      <div className="answers">
        <div className="answers-block question-one">
          <h2 className="question-check">Question One</h2>
          <div className="user-box">
            <p className="user">Ludvig</p>
            <p className="answer">Eager to learn</p>
          </div>
          <div className="user-box">
            <p className="user">{company}</p>
            <p className="answer">{answersOne}</p>
          </div>
        </div>
        <div className="answers-block question-two">
          <h2 className="question-check">Question two</h2>
          <div className="user-box">
            <p className="user">Ludvig</p>
            <p className="answer">Creative</p>
          </div>
          <div className="user-box">
            <p className="user">{company}</p>
            <p className="answer">{answersTwo}</p>
          </div>
        </div>
        <div className="answers-block question-three">
          <h2 className="question-check">Question Three</h2>
          <div className="user-box">
            <p className="user">Ludvig</p>
            <p className="answer">Fun</p>
          </div>
          <div className="user-box">
            <p className="user">{company}</p>
            <p className="answer">{answersThree}</p>
          </div>
        </div>
      </div>
      <div className="finish-message">
        <h2>This is the message</h2>
      </div>
      <div className="email">
        <div className="from row">
          <h3>
            <span>from: </span>
            {email}
          </h3>
        </div>
        <div className="to row">
          <h3>
            <span>to: </span> info@ludvigflyckt.com
          </h3>
        </div>
        <div className="subject row">
          <h3>
            <span>about: </span> Intership at {company}
          </h3>
        </div>
        <div className="mail-content">
          <p>
            Hi Ludvig! My name is {username} and Im the {role} at {company}
          </p>
        </div>
      </div>
      <button>Send</button>
    </>
  );
};

export default Finish;
