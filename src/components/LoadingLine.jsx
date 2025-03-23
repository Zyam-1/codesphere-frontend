import "./LoadingLine.css"; // Import the CSS file for styling

const LoadingLine = () => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <div className="loading-line-container">
        <div className="loading-line"></div>
      </div>
    </div>
  );
};

export default LoadingLine;
