import { makeAutoObservable } from "mobx";

export class Store {
    visiblePromoAndLink = false;
    utmSource = "";
    utmCampaign = "";

    constructor() {
        makeAutoObservable(this);
    }

    setVisiblePromo(visiblePromoAndLink) {
        this.visiblePromoAndLink = visiblePromoAndLink;
    }
    setUtmSource(utmSource) {
        this.utmSource = utmSource
    }
    setUtmCapmaign(utmCampaign) {
        this.utmCampaign = utmCampaign;
    }
}
