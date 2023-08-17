import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Greeting = ({ onClickNext, showGreeting }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    const name = user?.name || "";
    const role = user?.role || "";
    const company = user?.company || "";

    setUsername(name);
    setRole(role);
    setCompany(company);
  }, []);

  return (
    <div className="greeting-content">
      <div className={`greeting-wrapper ${showGreeting ? "show-content" : ""}`}>
        <h1>
          {" "}
          Hi <span className="username">{username}</span>
        </h1>
        <p className="paragraph-1">
          I see that you work as <span className="role">{role} </span>
          at <span className="company">{company}</span>
        </p>
        <p className="paragraph-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          molestiae reiciendis suscipit pariatur animi. Magni quibusdam, iure
          asperiores maxime ipsum exercitationem nihil laboriosam totam beatae
          nam nesciunt, magnam quas architecto.
        </p>
        <p className="result-link">
          Click{" "}
          <button
            onClick={() => {
              onClickNext();
            }}
          >
            HERE
          </button>{" "}
          to see if we are a match!
        </p>
      </div>
    </div>
  );
};

export default Greeting;
