// eslint-disable-next-line react/prop-types
export const Loading = ({ checkAnswers }) => {
  return (
    <div className="loading-content">
      {checkAnswers ? (
        <h1 className="comparing">
          Comparing answers <span className="dots"></span>
        </h1>
      ) : (
        <h1 className="done">All done!</h1>
      )}
    </div>
  );
};

export default Loading;
