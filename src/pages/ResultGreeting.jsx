// eslint-disable-next-line react/prop-types
export const Greeting = ({ onClickNext }) => {
  return (
    <div className="greeting-content">
      <h1>Result Greeting</h1>
      <button
        onClick={() => {
          onClickNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Greeting;
