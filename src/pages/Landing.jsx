export const Landing = () => {
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
