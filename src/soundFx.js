import badChoiceSrc from "./assets/sounds/badChoice.mp3";
import goodChoiceSrc from "./assets/sounds/goodChoice.mp3";
import pokemonsReloadSrc from "./assets/sounds/pokemonsReload.mp3";

const soundFx = (() => {
  const _goodChoice = new Audio(goodChoiceSrc),
    _badChoice = new Audio(badChoiceSrc),
    _pokemonsReload = new Audio(pokemonsReloadSrc);

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
