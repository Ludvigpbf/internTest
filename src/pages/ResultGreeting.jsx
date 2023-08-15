import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const Greeting = ({ onClickNext }) => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("User"));
    const name = user?.name || "";
    const role = user?.role || "";
    const company = user?.company || "";

    setUsername(name);
    setRole(role);
    setCompany(company);

    setTimeout(() => {
      setShowContent(true);
    }, 20);
  }, []);

  return (
    <div className="greeting-content">
      <div className={`greeting-wrapper ${showContent ? "show-content" : ""}`}>
        <h1 className="slide-in-one">
          {" "}
          Hi <span className="username">{username}</span>
        </h1>
        <p className="paragraph-1 slide-in-two">
          I see that you work as <span className="role">{role} </span>
          at <span className="company">{company}</span>
        </p>
        <p className="paragraph-2 slide-in-three">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          molestiae reiciendis suscipit pariatur animi. Magni quibusdam, iure
          asperiores maxime ipsum exercitationem nihil laboriosam totam beatae
          nam nesciunt, magnam quas architecto.
        </p>
        <p className="result-link slide-in-four">
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
