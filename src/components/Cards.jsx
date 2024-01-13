export default function Cards({ states, resetScore }) {
  const reshuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleCardClick = (e) => {
    const id = e.currentTarget.getAttribute("data-card");

    if (states.clickedIds.includes(id)) {
      resetScore(true);
      states.setPokemons(
        states.clickedIds.length === states.pokemons.length
          ? []
          : states.setPokemons([...reshuffle(states.pokemons)])
      );
    } else {
      states.setClickedIds([...states.clickedIds, id]);
    }
  };

  return (
    <div id="cards-contr">
      {states.pokemons.length ? (
        states.pokemons.map((pokemon) => (
          <div
            className="cards"
            key={pokemon.id}
            data-card={pokemon.id}
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
