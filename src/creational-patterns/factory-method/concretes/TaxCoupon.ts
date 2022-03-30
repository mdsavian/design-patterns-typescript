import Document from '../interfaces/Document';

export class TaxCoupon implements Document {
  printDocument(): string {
    return 'Printing tax coupon';
  }
}
