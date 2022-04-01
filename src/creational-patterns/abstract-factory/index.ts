import MobileFactory from './interfaces/MobileFactory';
import Smartphone from './interfaces/Smartphone';
import Tablet from './interfaces/Tablet';

export function createTablet(factory: MobileFactory): Tablet {
  return factory.createTablet();
}

export function createSmartPhone(factory: MobileFactory): Smartphone {
  return factory.createSmartphone();
}
