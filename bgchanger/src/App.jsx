import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setColor("gray");
          }}
        >
          Gray
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>
      </div>
    </>
  );
}

export default App;
