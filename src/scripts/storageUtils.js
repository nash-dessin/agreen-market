const CART_STORAGE_KEY = 'agri_market_cart';

export const getCart = () => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Unable to read cart from local storage:', error);
    return [];
  }
};

export const saveCart = (cart) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const safeCart = Array.isArray(cart) ? cart : [];
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(safeCart));
  } catch (error) {
    console.error('Unable to save cart to local storage:', error);
  }
};

export const clearCart = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('Unable to clear cart from local storage:', error);
  }
};

export default {
  getCart,
  saveCart,
  clearCart,
};
