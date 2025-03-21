const getTotalCost = (cart) => {
  return Array.from(cart.values())
    .reduce((acc, item) => acc + item.amount * item.price, 0)
    .toFixed(2);
};

const getTotalAmount = (cart) => {
  return Array.from(cart.values()).reduce((acc, item) => acc + item.amount, 0);
};

export const getTotals = (cart) => {
  const totalCost = getTotalCost(cart);
  const totalAmount = getTotalAmount(cart);
  return { totalCost, totalAmount };
};
