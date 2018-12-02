export function buildUrl(apiKey, base, path, params) {
    params = {
        ...params,
        api_key: apiKey
    };
    const pathWithParans = Object.keys(params).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    }).join('&');

    return base + path + "?" + pathWithParans;
};