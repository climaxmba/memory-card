import { useState, useEffect } from "react";
import soundFx from "../modules/soundFx";
import Icon from "@mdi/react";
import { mdiVolumeHigh, mdiVolumeOff } from "@mdi/js";

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
    <div id="scores-contr-wrapper" className="rounded-white-bg">
      <h2>Scores</h2>
      <div id="scores-contr">
        <span>Score: {states.score}</span>
        <span>High Score: {highScore}</span>
      </div>
    </div>
  );
}

function Error({ states }) {
  const message = states.errorMsg;

  return (
    <div id="error-msg" data-error={message}>
      {message}
    </div>
  );
}

function SoundBtn() {
  const [soundsEnabled, setSoundsEnabled] = useState(soundFx.getSoundsEnabled());
  const iconPath = soundsEnabled ? mdiVolumeHigh : mdiVolumeOff;

  function handleSoundBtnClick() {
    soundsEnabled ? soundFx.disableSounds() : soundFx.enableSounds();
    setSoundsEnabled(!soundsEnabled);
  }

  return (
    <button type="button" id="sounds-contr" className="icon-text-wrapper clickable" title="Toggle Sounds" onClick={handleSoundBtnClick}>
      <span>Sounds</span>
      <Icon path={iconPath} />
    </button>
  );
}

export { Instructions, Scores, Error, SoundBtn };
