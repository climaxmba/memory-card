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
    [currOffset, setCurrOffset] = useState(0);

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

  async function loadNewPokemons({ limit = 10, offset = 0 }) {
    try {
      const pokemonData = await pokeapi.getPokemonsList({
        limit,
        offset,
      });
      const pokemonsList = [];

      for (let i = 0; i < pokemonData.results.length; i++) {
        const data = pokemonData.results[i];
        const characterData = await pokeapi.resource(data.url);
        pokemonsList.push({
          name: data.name,
          id: data.name,
          sprite: characterData.sprites["front_default"],
        });
      }
      
      setPokemons(pokemonsList);
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
          <Scores states={states} resetScore={resetScore} />
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
