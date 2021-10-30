"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var Constants_1 = require("./Constants");
var Ads = /** @class */ (function () {
    function Ads() {
        this.initAds();
    }
    Ads.getInstance = function () {
        if (!Ads.instance) {
            Ads.instance = new Ads();
        }
        return Ads.instance;
    };
    Ads.prototype.initAds = function () {
        this.ads = __spreadArray([], Constants_1["default"].ALL_ADS, true);
    };
    Ads.prototype.getAd = function () {
        if (this.ads.length === 0) {
            this.initAds();
        }
        return this.ads.pop();
    };
    return Ads;
}());
exports["default"] = Ads;
