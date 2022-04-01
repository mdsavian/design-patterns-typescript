import Tablet from '../interfaces/Tablet';

export default class IPad implements Tablet {
  getTabletName(): string {
    return 'I am an iPad Pro';
  }
}
