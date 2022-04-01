import Tablet from '../interfaces/Tablet';

export default class GalaxyTab implements Tablet {
  getTabletName(): string {
    return 'I am an Galaxy Tab S8';
  }
}
