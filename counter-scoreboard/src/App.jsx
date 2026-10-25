import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function increaseCount() {
    count((previousCount) => Math.min(10, previousCount + 1));

    setHighScore((previousCount) =>
      Math.max(previousCount, Math.min(10, count + 1)),
    );
  }

  function decreaseCount() {
    setCount((previousCount) => Math.max(0, previousCount - 1));
  }

  function resetCount() {
    setCount(0);
  }
  return (
    <main className="counter">
      <h1>React counter</h1>

      <h2 className={count > 0 ? "positive" : count < 0 ? "negative" : ""}>
        {count}
      </h2>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${count * 10}%` }} />
      </div>

      {count === 10 ? (
        <p>Maximum score reached!</p>
      ) : (
        <p>{10 - count} points remaining</p>
      )}
      <p>{count * 10}% completed</p>

      <div className="buttons">
        <button onClick={decreaseCount}>- Decrease</button>
        <button onClick={increaseCount}>+ Increase</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <p>Highest Score: {highScore}</p>
    </main>
  );
}

export default App;
