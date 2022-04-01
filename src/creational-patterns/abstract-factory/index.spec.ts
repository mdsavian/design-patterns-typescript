import { createSmartPhone, createTablet } from '.';
import AppleFactory from './concretes/AppleFactory';
import SamsungFactory from './concretes/SamsungFactory';

describe('Abstract Factory', () => {
  it('Should create an iPad', () => {
    const tablet = createTablet(new AppleFactory());

    const tabletName = tablet.getTabletName();

    expect(tabletName).toContain('iPad');
  });

  it('Should create an Galaxy Tab', () => {
    const tablet = createTablet(new SamsungFactory());

    const tabletName = tablet.getTabletName();

    expect(tabletName).toContain('Galaxy Tab');
  });

  it('Should create an iPhone', () => {
    const smartphone = createSmartPhone(new AppleFactory());

    const smartphoneName = smartphone.getSmartphoneName();

    expect(smartphoneName).toContain('iPhone');
  });

  it('Should create an Galaxy', () => {
    const smartphone = createSmartPhone(new SamsungFactory());

    const smartphoneName = smartphone.getSmartphoneName();

    expect(smartphoneName).toContain('Galaxy');
  });
});
