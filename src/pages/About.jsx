// eslint-disable-next-line react/prop-types
export const About = ({ onClickNext, showLine }) => {
  return (
    <div className="about-content">
      <div className="who-card">
        <h2 className="who-title">So who am i?</h2>
        <p className="who-info">
          My name is Ludvig Flyckt. I am 32 years old and live in Stockholm,
          Sweden, with my wife, daughter, and Labrador. I have been working in
          the restaurant business for 14 years, with the last 6 years in
          leadership positions. I began my journey to become a Fullstack
          Developer at Chas Academy in August 2022 and will graduate in June
          2024. My internship is scheduled to start at the end of October 2023
          and will last until April 2024.
        </p>
      </div>
      <div className="what-card">
        <h2 className="what-title">What is this?</h2>
        <p className="what-info">
          In my quest for the perfect internship, I&apos;ve put together a fun
          quiz. It&apos;s a way to see if I can find a place that&apos;s as
          creative and out-of-the-box thinking as I am. The quiz consists of
          three questions, each with multiple answer choices. Let&apos;s see if
          we&apos;re a match! <span>Good luck!</span>
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
