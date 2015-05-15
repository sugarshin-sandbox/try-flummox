import {Store} from 'flummox';

export default class ShopStore extends Store {

  constructor(flux) {
    super();
    const shopActions = flux.getActions('shops');
    this.register(shopActions.updateByGeolocation, this.handleUpdateShops);
    this.state = {};
  }

  handleUpdateShops(shops) {
    this.setState({
      shops: shops
    });
  }

}
