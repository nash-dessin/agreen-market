export function calculateSubtotal(cart) {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}
