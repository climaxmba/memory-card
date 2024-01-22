import { useState, useEffect } from "react";

function Instructions() {
  return (
    <div>
      <p className="instructions">Click the cards to play the game.</p>
      <p className="instrucrions">Do not click the same card more than once.</p>
    </div>
  );
}

function Scores({ states, resetScore }) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    states.setScore(states.clickedIds.length);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states.clickedIds.length]);

  return (
    <div id="scores-contr">
      <span>Score: {states.score}</span>
      <span>High Score: {highScore}</span>
    </div>
  );
}

export { Instructions, Scores };
