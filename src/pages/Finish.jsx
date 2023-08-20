import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
export const Finish = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    const name = user?.name || "";
    /* const role = user?.role || "";
    const company = user?.company || ""; */

    setUsername(name);
    /*  setRole(role);
    setCompany(company); */
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
            <p className="answer">This is ludvigs answer one</p>
          </div>
          <div className="user-box">
            <p className="user">{username}</p>
            <p className="answer">This is users answer one</p>
          </div>
        </div>
        <div className="answers-block question-two">
          <h2 className="question-check">Question two</h2>
          <div className="user-box">
            <p className="user">Ludvig</p>
            <p className="answer">This is ludvigs answer two</p>
          </div>
          <div className="user-box">
            <p className="user">{username}</p>
            <p className="answer">This is users answer two</p>
          </div>
        </div>
        <div className="answers-block question-three">
          <h2 className="question-check">Question Three</h2>
          <div className="user-box">
            <p className="user">Ludvig</p>
            <p className="answer">This is your answer three</p>
          </div>
          <div className="user-box">
            <p className="user">{username}</p>
            <p className="answer">This is my answer three</p>
          </div>
        </div>
      </div>
      <div className="finish-message">
        <h2>This is the message</h2>
      </div>
      <div className="email">
        <div className="from row">
          <h3>user</h3>
        </div>
        <div className="to row">
          <h3>info@ludvigflyckt.com</h3>
        </div>
        <div className="about row">
          <h3>This is the email div</h3>
        </div>
        <div className="mail-content">
          <p>Hi Ludvig! My name is user and Im the role at company</p>
        </div>

        <button>Send</button>
      </div>
    </>
  );
};

export default Finish;
