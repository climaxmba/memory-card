import { useEffect, useState } from "react";
import { Pokedex } from "pokeapi-js-wrapper";
import Cards from "./components/Cards";
import { Instructions, Scores } from "./components/utils";
import "./styles/App.css";

const pokeapi = new Pokedex();

function App() {
  const [pokemons, setPokemons] = useState([]),
    [score, setScore] = useState([]),
    [clickedIds, setClickedIds] = useState([]),
    [currOffset, setCurrOffset] = useState(1);

  const states = {
    pokemons,
    setPokemons,
    score,
    setScore,
    clickedIds,
    setClickedIds,
    currOffset,
    setCurrOffset,
  };

  function resetScore() {
    // TODO
    return;
  }

  async function loadNewPokemons({ limit = 10, offset = 1 }) {
    try {
      const pokemonData = await pokeapi.getPokemonsList({
        limit,
        offset,
      });
      setPokemons(
        pokemonData.map((data) => {
          return { name: data.name, id: data.id, sprite: data.sprite };
        })
      );
    } catch (error) {
      // TODO: Display Error
      console.error(error);
    }
  }

  // OnStart
  useEffect(() => {
    loadNewPokemons({});
  }, []);

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
        <Cards
          states={states}
          resetScore={resetScore}
          loadNewPokemons={loadNewPokemons}
        />
      </main>
      <footer>Made by @climaxmba - GitHub</footer>
    </>
  );
}

export default App;
