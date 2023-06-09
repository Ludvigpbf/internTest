import { useState } from "react";

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
          src="./src/assets/spinner.png"
          alt="spinning name"
          className={`spinning-img ${animationClass}`}
          onMouseOver={handleHeaderImageMouseOver}
          onAnimationEnd={handleAnimationEnd}
        />
      </div>
      <nav>
        <button className="hamburger-menu ">
          <div className="square top-left"></div>
          <div className="square top-right"></div>
          <div className="square bottom-right"></div>
        </button>
      </nav>
    </header>
  );
};

export default Header;
