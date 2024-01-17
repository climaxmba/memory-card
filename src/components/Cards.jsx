export default function Cards({ states, resetScore, loadNewPokemons }) {
  const reshuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleCardClick = (e) => {
    const id = e.currentTarget.getAttribute("data-pokemon-id");

    if (states.clickedIds.includes(id)) {
      // GameOver
      resetScore(true);
      states.setPokemons(
        states.clickedIds.length === states.pokemons.length
          ? []
          : states.setPokemons([...reshuffle(states.pokemons)])
      );
    } else {
      if (states.clickedIds.length === 10 /* limit = 10 */) {
        // Load new data
        const nextOffset = states.currOffset + 10;
        loadNewPokemons({ offset: nextOffset });
        states.setCurrOffset(nextOffset);
      } else states.setClickedIds([...states.clickedIds, id]);
    }
  };

  return (
    <div id="cards-contr">
      {states.pokemons.length ? (
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
