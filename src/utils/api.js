import { apiConfig } from './utils';

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  /**
   * Sends a GET network request with a given path
   * @param {String} path = the last part of full URL
   * @returns {Promise}
   */
  fetchGet(path) {
    const fetchObject = {
      method: 'GET',
      headers: this.headers,
    };
    return fetch(`${this.baseUrl}${path}`, fetchObject).then((res) =>
      res.ok ? res.json() : res.status(404).send({ error: `Can't get data!` })
    );
  }

  /**
   * Gets a list of first exchNumber exchanges
   * @param {String} exchNumber
   * @returns {Promise}
   */
  getExchanges(exchNumber) {
    return this.fetchGet(`exchanges?per_page=${exchNumber}&page=1`);
  }

  /**
   * Gets a single exchange information
   * @param {String} exchangeId
   * @returns {Promise}
   */
  getExchange(exchangeId) {
    return this.fetchGet(`exchanges/${exchangeId}`);
  }
}

// prepare api object for use

const api = new Api({
  baseUrl: apiConfig.baseUrl,
  headers: {
    'Content-Type': apiConfig.appJSONType,
  },
});
export default api;
