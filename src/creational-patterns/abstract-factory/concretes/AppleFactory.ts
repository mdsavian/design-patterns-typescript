import MobileFactory from '../interfaces/MobileFactory';
import Smartphone from '../interfaces/Smartphone';
import Tablet from '../interfaces/Tablet';
import IPad from './IPad';
import IPhone from './IPhone';

export default class AppleFactory implements MobileFactory {
  createSmartphone(): Smartphone {
    return new IPhone();
  }
  createTablet(): Tablet {
    return new IPad();
  }
}
