"use strict";
exports.__esModule = true;
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(configuration) {
        this.media = configuration.element;
        this.plugins = configuration.plugins || [];
        this.initializationPlugins();
        this.initializationPlayer();
    }
    MediaPlayer.prototype.initializationPlayer = function () {
        this.container = document.createElement('div');
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initializationPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.paused ? this.media.play() : this.media.pause();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.togglePlay = function () {
        this.media.paused ? this.play() : this.pause();
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.toggleMute = function () {
        this.media.muted ? this.unmute() : this.mute();
    };
    return MediaPlayer;
}());
exports["default"] = MediaPlayer;
