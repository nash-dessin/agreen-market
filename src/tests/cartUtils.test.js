import { calculateSubtotal } from '../utils/cartUtils';

describe('calculateSubtotal', () => {
  it('returns 0 for an empty cart', () => {
    expect(calculateSubtotal([])).toBe(0);
  });

  it('calculates the subtotal for all items in the cart', () => {
    const cart = [
      { id: 1, price: 20, quantity: 2 },
      { id: 2, price: 15.5, quantity: 3 },
      { id: 3, price: 8, quantity: 1 },
    ];

    expect(calculateSubtotal(cart)).toBeCloseTo(20 * 2 + 15.5 * 3 + 8 * 1);
  });
});
