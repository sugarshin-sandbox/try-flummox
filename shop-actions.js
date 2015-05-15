import Promise from 'blue'
import {Actions} from 'flummox';

export default class ShopActions extends Actions {

  updateByGeolocation() {
    return
  }

  _requestShopData(...query) {
    return new Promise((resolve, reject) => {
      let params = assign({}, baseQuery, ...query);
      request(gourmetApi, params)
      .then(resolve)
      .catch(reject);
    });
  }

  _request(url, query) {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: qs.stringify(query, {arrayFormat: 'repeat'}) + '&callback'// todo
      }, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }

}
