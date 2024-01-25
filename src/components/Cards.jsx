export default function Cards({ states, resetScore, loadNewPokemons }) {
  const reshuffle = (arr) => arr/* .sort(() => Math.random() - 0.5); */;

  const handleCardClick = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    console.log(states.clickedIds);

    if (states.clickedIds.includes(id)) {
      // GameOver
      // console.log("Game Over");

      resetScore(true);
      states.setPokemons([...reshuffle(states.pokemons)]);
    } else {
      if (states.clickedIds.length === 9) {
        // Load new data
        // console.log("Load new data");

        states.setIsLoading(true);

        const nextOffset = states.currOffset + 10;
        loadNewPokemons({ offset: nextOffset });
        states.setCurrOffset(nextOffset);

        states.setClickedIds([]);
      } else {
        // Reshuffle
        // console.log("Reshuffle");
        
        states.setClickedIds([...states.clickedIds, id]);
        states.setPokemons([...reshuffle(states.pokemons)]);
      }

      states.setScore(states.score + 1);
    }
  };

  return (
    <div id="cards-contr">
      {(!states.isLoading && states.pokemons.length) ? (
        states.pokemons.map((pokemon) => (
          <div
            className="cards"
            key={pokemon.id}
            data-pokemon-id={pokemon.id}
            onClick={handleCardClick}
          >
            <img src={pokemon.sprite} alt="" />
            <div className="pokemon-name">{pokemon.name}</div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
