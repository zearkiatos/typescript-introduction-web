import Constants from "./Constants";
class Ads {
    private static instance: Ads;
    private ads: IAd[];

    private constructor() {
        this.initAds();
    }

    static getInstance() {
        if (!Ads.instance) {
            Ads.instance = new Ads();
        }

        return Ads.instance;
    }

    private initAds() {
        this.ads = [...Constants.ALL_ADS];
    }

    getAd() {
        if (this.ads.length === 0) {
            this.initAds();
        }
        return this.ads.pop();
    }
}

export default Ads;