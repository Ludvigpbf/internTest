import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Register = ({ nextQuestion }) => {
  const [answers, setAnswers] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Questionnaire answers:", answers);
    localStorage.setItem("User", JSON.stringify(answers));
    nextQuestion();
  };

  return (
    <div className="container">
      <div className="header-text">
        <h1>Who are you?</h1>{" "}
        <div className="info">
          <p
            className="info-button"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            i
          </p>
          {showPopup && (
            <div className="popup">
              <p>
                *Your information is only stored during this session. If the
                window is closed or updated the information is deleted.
              </p>
            </div>
          )}
        </div>
      </div>
      <form className="questionnaire-form" onSubmit={handleSubmit}>
        <div className="question">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={answers.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="question">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={answers.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="question">
          <p>Company</p>
          <input
            type="text"
            name="company"
            value={answers.company}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="question">
          <p>Role</p>
          <input
            type="text"
            name="role"
            value={answers.role}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
      <h2>1/4</h2>
    </div>
  );
};

export default Register;
