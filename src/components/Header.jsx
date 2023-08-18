import { useState } from "react";
import spinner from "../assets/spinner.png";
import squares from "../assets/squares.png";

export const Header = () => {
  const [animationClass, setAnimationClass] = useState("");

  const handleHeaderImageMouseOver = () => {
    setAnimationClass("animate");
  };

  const handleAnimationEnd = () => {
    setAnimationClass("");
  };
  return (
    <header>
      <div className="circle">
        <img
          src={spinner}
          alt="spinning name"
          className={`spinning-img ${animationClass}`}
          onMouseOver={handleHeaderImageMouseOver}
          onAnimationEnd={handleAnimationEnd}
        />
      </div>
      <div className="squares">
        <img src={squares} alt="" />
      </div>
    </header>
  );
};

export default Header;
