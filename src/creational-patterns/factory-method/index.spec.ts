import { printTaxCoupon, printInvoice } from '.';

describe('Factory Method', () => {
  it('Should print a Tax Coupon', () => {
    const description = printTaxCoupon();

    expect(description).toContain('tax coupon');
    expect(description).not.toContain('invoice');
  });

  it('Should print an invoice', () => {
    const description = printInvoice();

    expect(description).toContain('invoice');
    expect(description).not.toContain('tax coupon');
  });
});
