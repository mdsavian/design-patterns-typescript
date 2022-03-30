import { FiscalPrinter } from './concretes/FiscalPrinter';
import { HpPrinter } from './concretes/HpPrinter';

export function printTaxCoupon() {
  const fiscalPrinter = new FiscalPrinter();
  return fiscalPrinter.print();
}

export function printInvoice() {
  const hpPrinter = new HpPrinter();
  return hpPrinter.print();
}
