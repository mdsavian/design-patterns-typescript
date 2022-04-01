import MobileFactory from '../interfaces/MobileFactory';
import Smartphone from '../interfaces/Smartphone';
import Tablet from '../interfaces/Tablet';
import Galaxy from './Galaxy';
import GalaxyTab from './GalaxyTab';

export default class SamsungFactory implements MobileFactory {
  createSmartphone(): Smartphone {
    return new Galaxy();
  }
  createTablet(): Tablet {
    return new GalaxyTab();
  }
}
