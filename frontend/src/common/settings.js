const ROOT_DOMAIN_ADDRESS = window.location.hostname;
const ROOT_API_ADDR = `http://${ROOT_DOMAIN_ADDRESS}/api`;
const settings = {
    API_ROUTES: {
        fetchPromocode: `${ROOT_API_ADDR}/fetch-promocode/`,
    },
    LOCAL_STORAGE: {
        promocode: 'promocode-5devilery',
    },
};

export default settings;
