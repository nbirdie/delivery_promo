import { makeAutoObservable } from 'mobx';

export class Store {
    visiblePromoAndLink = false;
    shouldAnimateLeaves = false;
    promoCode = '';
    promoCodeSpan = 'Ваш промокод';
    utmSource = '';
    utmCampaign = '';

    constructor() {
        makeAutoObservable(this);
    }

    setPromoCode(promoCode) {
        this.promoCode = promoCode;
    }

    setPromoCodeSpan(promoCodeSpan) {
        this.promoCodeSpan = promoCodeSpan;
    }

    setVisiblePromo(visiblePromoAndLink) {
        this.visiblePromoAndLink = visiblePromoAndLink;
    }

    setShouldAnimateLeaves(shouldAnimateLeaves) {
        this.shouldAnimateLeaves = shouldAnimateLeaves;
    }

    setUtmSource(utmSource) {
        this.utmSource = utmSource;
    }

    setUtmCampaign(utmCampaign) {
        this.utmCampaign = utmCampaign;
    }
}
