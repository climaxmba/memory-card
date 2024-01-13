import { useState } from "react";
import Cards from "./components/Cards";
import { Instructions, Scores } from "./components/utils";
import "./styles/App.css";

function App() {
  const [pokemons, setPokemons] = useState([]),
    [score, setScore] = useState([]);

  const states = {
    pokemons,
    setPokemons,
    score,
    setScore
  };

  function resetScore() {
    // TODO
    return;
  }

  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
      </header>
      <main>
        <div>
          <Instructions />
          <Scores states={states} />
        </div>
        <Cards states={states} resetScore={resetScore} />
      </main>
      <footer>Made by @climaxmba - GitHub</footer>
    </>
  );
}

export default App;
