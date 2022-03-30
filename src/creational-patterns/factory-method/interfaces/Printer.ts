import Document from './Document';

export interface Printer {
  createDocument(): Document;
  print(): string;
}
