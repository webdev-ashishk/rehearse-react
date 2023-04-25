import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <>
      <h2>App is running with h2 tag</h2>
      <p>lorem10</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
