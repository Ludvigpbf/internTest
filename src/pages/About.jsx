// eslint-disable-next-line react/prop-types
export const About = ({ onClickNext, showLine }) => {
  return (
    <div className="about-content">
      <div className="who-card">
        <h2 className="who-title">So who am i?</h2>
        <p className="who-info">
          My name is Ludvig Flyckt, 32 y/o and live in Stockholm/Sweden with my
          wife, daughter and labrador. Ive been working in the restaurant
          buisness for 14 years and the last 6 years in leading positions. I
          started my journey to become a Fullstack Developer at Chas Acadamy in
          August 2022 and will graduate june 2024. In October 2023, my intership
          starts and will last until March 2024. For more information about me
          please visit my{" "}
          <a
            href="https://www.linkedin.com/in/ludvigflyckt/"
            className="linkedin"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
      <div className="what-card">
        <h2 className="what-title">What is this?</h2>
        <p className="what-info">
          To find my dream intership I made this test to see if I can find a
          place that is as creative as me and like to think outside the box. The
          test consist of 3 steps and to solve them it helps if you know how to
          code. There are hints, but you will need to find them to get them. If
          you manage to solve them all i think we are a match.
        </p>
      </div>
      <div className="button-container">
        {showLine && <span className="about-in-line"></span>}
        <button
          className="start about-line-out"
          onClick={() => {
            onClickNext();
          }}
        >
          Lets get started
        </button>
      </div>
    </div>
  );
};

export default About;
