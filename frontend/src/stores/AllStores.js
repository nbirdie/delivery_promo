import { Store } from './store';

export const buildAllStores = () => {
    return {
        store: new Store(),
    };
};
