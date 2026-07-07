import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const deleteValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <div className="counter-card">
          <h1>Counter App</h1>

          <h2 className="counter-value">{count}</h2>

          <div className="buttons">
            <button className="btn delete" onClick={deleteValue}>
              − Delete Count
            </button>

            <button className="btn add" onClick={addValue}>
              + Add Count
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
