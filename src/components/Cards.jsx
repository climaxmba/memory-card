export default function Cards({ states, resetScore, loadNewPokemons }) {
  const reshuffle = (arr) => arr/* .sort(() => Math.random() - 0.5); */;
  const reachedBreakPoint = () =>
    states.clickedIds.length ===
    states.currOffset + 10 - (states.currOffset / 10 + 1);

  const handleCardClick = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");
    console.log(states.clickedIds);

    if (states.clickedIds.includes(id)) {
      // console.log("Game Over");
      // GameOver
      resetScore(true);
      states.setPokemons([...reshuffle(states.pokemons)]);
    } else {
      if (reachedBreakPoint()) {
        // console.log("Load new data");
        // Load new data
        states.setIsLoading(true);
        const nextOffset = states.currOffset + 10;
        loadNewPokemons({ offset: nextOffset });
        states.setCurrOffset(nextOffset);
      } else {
        // console.log("Reshuffle");
        // Reshuffle
        states.setClickedIds([...states.clickedIds, id]);
        states.setPokemons([...reshuffle(states.pokemons)]);
      }
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
