import Document from '../interfaces/Document';

export class Invoice implements Document {
  printDocument(): string {
    return 'Printing invoices';
  }
}
