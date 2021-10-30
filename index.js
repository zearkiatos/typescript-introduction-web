"use strict";
exports.__esModule = true;
var MediaPlayer_1 = require("./MediaPlayer");
var AutoPlay_1 = require("./plugins/AutoPlay");
var AutoPause_1 = require("./plugins/AutoPause");
var Ads_1 = require("./plugins/Ads");
var video = document.querySelector("video");
var player = new MediaPlayer_1["default"]({
    element: video,
    plugins: [new AutoPlay_1["default"](), new AutoPause_1["default"](), new Ads_1["default"]()]
});
var playButton = document.querySelector("#playButton");
playButton.onclick = function () {
    player.togglePlay();
};
var muteButton = document.querySelector("#muteButton");
muteButton.onclick = function () {
    player.toggleMute();
};
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")["catch"](function (error) {
        console.error("Something was wrong " + error.message);
    });
}
