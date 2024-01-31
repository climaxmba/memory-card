// import sounds

const soundFx = (() => {
  const _goodChoice = new Audio(),
    _badChoice = new Audio(),
    _pokemonsReload = new Audio();

  let soundsEnabled = true;

  function _playSound(audioElem) {
    if (soundsEnabled) {
      audioElem.load();
      audioElem.play();
    }
  }

  function playGoodChoice() {
    _playSound(_goodChoice);
  }

  function playBadChoice() {
    _playSound(_badChoice);
  }

  function playPokemonsReload() {
    _playSound(_pokemonsReload);
  }

  function enableSounds() {
    soundsEnabled = true;
  }

  function disableSounds() {
    soundsEnabled = false;
  }

  return {
    playGoodChoice,
    playBadChoice,
    playPokemonsReload,
    enableSounds,
    disableSounds,
  };
})();

export default soundFx;
