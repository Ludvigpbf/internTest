// eslint-disable-next-line react/prop-types
export const Loading = ({ onClickNext }) => {
  return (
    <div className="loading-content">
      <h1>Loading</h1>
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

export default Loading;
