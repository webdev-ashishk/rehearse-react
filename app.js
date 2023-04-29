import React from "react";
import ReactDOM from "react-dom/client";
import State from "./pages/State";
const App = () => {
  return (
    <>
      <h1 style={{ color: "red", textAlign: "center" }}>Learning react Hook</h1>
      <h1>1.Use state Hook</h1>
      <State />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
