import Smartphone from './Smartphone';
import Tablet from './Tablet';

export default interface MobileFactory {
  createTablet(): Tablet;
  createSmartphone(): Smartphone;
}
