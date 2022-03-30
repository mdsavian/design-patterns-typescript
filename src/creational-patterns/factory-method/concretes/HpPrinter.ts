import Document from '../interfaces/Document';
import { Printer } from '../interfaces/Printer';
import { Invoice } from './Invoice';

export class HpPrinter implements Printer {
  createDocument(): Document {
    return new Invoice();
  }

  print(): string {
    const invoice = this.createDocument();
    return invoice.printDocument();
  }
}
