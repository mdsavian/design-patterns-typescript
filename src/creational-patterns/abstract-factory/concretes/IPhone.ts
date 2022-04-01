import Smartphone from '../interfaces/Smartphone';

export default class IPhone implements Smartphone {
  getSmartphoneName(): string {
    return 'I am an iPhone 13';
  }
}
