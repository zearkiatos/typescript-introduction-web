"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.THRESHOLD = 0.25;
        this.threshold = this.THRESHOLD;
        this.handlerIntersection = this.handlerIntersection.bind(this);
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var configuration = {
            threshold: this.threshold
        };
        var observer = new IntersectionObserver(this.handlerIntersection, configuration);
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handlerVisibilityChange);
    };
    AutoPause.prototype.handlerIntersection = function (entries) {
        var entry = entries[0];
        var visible = entry.intersectionRatio >= this.threshold;
        if (visible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    AutoPause.prototype.handlerVisibilityChange = function () {
        var visible = document.visibilityState === "visible";
        if (visible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
