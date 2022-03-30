import Document from '../interfaces/Document';
import { Printer } from '../interfaces/Printer';
import { TaxCoupon } from './TaxCoupon';

export class FiscalPrinter implements Printer {
  createDocument(): Document {
    return new TaxCoupon();
  }

  print(): string {
    const taxCoupon = this.createDocument();
    return taxCoupon.printDocument();
  }
}
