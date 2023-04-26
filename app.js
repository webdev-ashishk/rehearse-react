import React from "react";
import ReactDOM from "react-dom/client";

// const Car = (props) => {
//   return (
//     <li>
//       I am a{props.brand} and date is {props.date}
//     </li>
//   );
// };

// const App = () => {
//   const cars = ["ford-A", "ford-B", "ford-C", "ford-D"];
//   const date = [10, 20, 30, 40];
//   return (
//     <>
//       <h1>React-List!</h1>
//       <ul>
//         {cars.map((car) => (
//           <Car brand={car} />
//         ))}
//         {/* {cars.map((time) => (
//           <Car date={time} />
//         ))} */}
//       </ul>
//     </>
//   );
const Car = (props) => {
  return <li>I am a{props.brand};</li>;
};

const App = () => {
  const cars = [
    { id: 1, brand: "ford-A" },
    { id: 2, brand: "ford-b" },
    { id: 3, brand: "ford-c" },
    { id: 4, brand: "ford-d" },
  ];
  return (
    <>
      <h1>React-List!</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
