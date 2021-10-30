import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});

const playButton:HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => {
  player.togglePlay();
};

const muteButton:HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
  player.toggleMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(`Something was wrong ${error.message}`);
  });
}
