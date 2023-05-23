import { useEffect } from "react";

export const Landing = () => {
  useEffect(() => {
    const handleScroll = () => {
      const neonLine = document.querySelector(".neon-line");
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const landingSectionHeight =
        document.querySelector(".landing").offsetHeight;
      const aboutSectionHeight = document.querySelector(".about").offsetHeight;
      const firstTaskSectionHeight =
        document.querySelector(".first-task").offsetHeight;
      const secondTaskSectionHeight =
        document.querySelector(".second-task").offsetHeight;
      const thirdTaskSectionHeight =
        document.querySelector(".third-task").offsetHeight;
      const finishSectionHeight =
        document.querySelector(".finish").offsetHeight;

      if (scrollPosition >= 0 && scrollPosition < landingSectionHeight) {
        neonLine.style.top = "0";
        neonLine.style.height = `${windowHeight}px`;
      } else if (
        scrollPosition >= landingSectionHeight &&
        scrollPosition < landingSectionHeight + aboutSectionHeight
      ) {
        neonLine.style.top = `${windowHeight}px`;
        neonLine.style.height = `${aboutSectionHeight}px`;
      } else if (
        scrollPosition >= landingSectionHeight + aboutSectionHeight &&
        scrollPosition <
          landingSectionHeight + aboutSectionHeight + firstTaskSectionHeight
      ) {
        neonLine.style.top = `${windowHeight + aboutSectionHeight}px`;
        neonLine.style.height = `${firstTaskSectionHeight}px`;
      } else if (
        scrollPosition >=
          landingSectionHeight + aboutSectionHeight + firstTaskSectionHeight &&
        scrollPosition <
          landingSectionHeight +
            aboutSectionHeight +
            firstTaskSectionHeight +
            secondTaskSectionHeight
      ) {
        neonLine.style.top = `${
          windowHeight + aboutSectionHeight + firstTaskSectionHeight
        }px`;
        neonLine.style.height = `${secondTaskSectionHeight}px`;
      } else if (
        scrollPosition >=
          landingSectionHeight +
            aboutSectionHeight +
            firstTaskSectionHeight +
            secondTaskSectionHeight &&
        scrollPosition <
          landingSectionHeight +
            aboutSectionHeight +
            firstTaskSectionHeight +
            secondTaskSectionHeight +
            thirdTaskSectionHeight
      ) {
        neonLine.style.top = `${
          windowHeight +
          aboutSectionHeight +
          firstTaskSectionHeight +
          secondTaskSectionHeight
        }px`;
        neonLine.style.height = `${thirdTaskSectionHeight}px`;
      } else if (
        scrollPosition >=
          landingSectionHeight +
            aboutSectionHeight +
            firstTaskSectionHeight +
            secondTaskSectionHeight +
            thirdTaskSectionHeight &&
        scrollPosition <
          landingSectionHeight +
            aboutSectionHeight +
            firstTaskSectionHeight +
            secondTaskSectionHeight +
            thirdTaskSectionHeight +
            finishSectionHeight
      ) {
        neonLine.style.top = `${
          windowHeight +
          aboutSectionHeight +
          firstTaskSectionHeight +
          secondTaskSectionHeight +
          thirdTaskSectionHeight
        }px`;
        neonLine.style.height = `${finishSectionHeight}px`;
      } else {
        neonLine.style.top = "100vh";
        neonLine.style.height = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <header>
        <div className="circle">
          <img src="./src/assets/spinner.png" alt="" className="spinning-img" />
        </div>
      </header>
      <section className="landing">
        <div className="hero">
          <div className="hello">
            <h1>Hello there</h1>
            <div className="words">
              <span>Recruiter</span>
              <span>Developer</span>
              <span>Colleague</span>
              <span>You!</span>
              <span>Recruiter</span>
            </div>
          </div>

          <div className="introduction">
            <h1 className="me">
              I&apos;m <span className="first-name">Ludvig Flyckt</span>
            </h1>
            <p>
              I&apos;m currently studying to become a<br />
              <span className="work-title">Full stack developer</span> and I am
              looking for the best company to do my internship at. For me,
              it&apos;s important to be challenged , creative and have a good
              balance between playfullness and professionalism.
              <br /> <br />
              <span className="match">Are we a match?</span>{" "}
              <span className="find-out">Lets find out!</span>
            </p>
          </div>
        </div>
        <div>
          <span className="neon-line"></span>
        </div>
      </section>
      <section className="about"></section>
      <section className="first-task"></section>
      <section className="second-task"></section>
      <section className="third-task"></section>
      <section className="finish"></section> */}

      <div className="hero">
        <div className="hello">
          <h1>Hello</h1>
          <div className="words">
            <span>Recruiter</span>
            <span>Developer</span>
            <span>Colleague</span>
            <span>You!</span>
            <span>Recruiter</span>
          </div>
        </div>

        <div className="introduction">
          <h1 className="me">
            I&apos;m <span className="first-name">Ludvig Flyckt</span>
          </h1>
          <p>
            I&apos;m currently studying to become a<br />
            <span className="work-title">Full stack developer</span> and I am
            looking for the best company to do my internship at. For me,
            it&apos;s important to be challenged , creative and have a good
            balance between playfullness and professionalism.
            <br /> <br />
            <span className="match">Are we a match?</span>{" "}
            <button className="find-out">Lets find out!</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
