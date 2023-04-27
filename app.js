import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// const App = () => {
//   const textChange = () => {
//     setText("setText is called!!");
//   };
//   const [text, setText] = useState("text is called!");
//   return (
//     <>
//       <h1>Learning react state basics</h1>
//       <h3>{text}</h3>
//       <button onClick={textChange}>Click Here to change heading of h1</button>
//     </>
//   );
// };
/* -------------Click a button to increase the value--------------------> */

// const App = () => {
//   const btnClicked = () => {
//     setCount((count = count + 1));
//   };
//   let [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>You have clicke me-{count} time</h1>
//       <button onClick={btnClicked}>Increase Count Value</button>
//     </>
//   );
// };

const App = () => {
  const btnClicked = () => {
    setCount((c) => c + 1);
  };
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Increase by 5 time:{count} time</h1>
      <button
        onClick={() => {
          btnClicked();
          btnClicked();
          btnClicked();
          btnClicked();
          btnClicked();
        }}
      >
        increase by +5
      </button>
      <h2>Increased by</h2>
      <button
        onClick={() => {
          btnClicked();
        }}
      >
        increased by +1
      </button>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
