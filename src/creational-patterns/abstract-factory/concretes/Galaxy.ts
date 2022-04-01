import Smartphone from '../interfaces/Smartphone';

export default class Galaxy implements Smartphone {
  getSmartphoneName(): string {
    return 'I am an Galaxy S21';
  }
}
