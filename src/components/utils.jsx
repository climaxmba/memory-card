import { useState, useEffect } from "react";

function Instructions() {
  return (
    <div id="instructions-contr" className="rounded-white-bg">
      <h2>Instructions</h2>
      <div>
        <p className="instructions">Click the cards to play the game.</p>
        <p className="instrucrions">
          Do not click the same card more than once.
        </p>
      </div>
    </div>
  );
}

function Scores({ states }) {
  const [highScore, setHighScore] = useState(0),
    [prevScore, setPrivScore] = useState(states.score);

  const score = states.score;

  useEffect(() => {
    score < prevScore && setHighScore(prevScore);
    setPrivScore(score);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="rounded-white-bg">
      <h2>Scores</h2>
      <div id="scores-contr">
        <span>Score: {states.score}</span>
        <span>High Score: {highScore}</span>
      </div>
    </div>
  );
}

export { Instructions, Scores };
