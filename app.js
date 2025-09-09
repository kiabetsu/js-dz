class Billing {
  amount = 0;

  calculateTotal(prices) {
    this.amount = prices.reduce((acc, value) => (acc += value), 0);
  }

  fixBilling(prices) {
    this.calculateTotal(prices);
    return this.amount;
  }

  hourBilling(prices, hours) {
    return this.fixBilling(prices) * hours;
  }

  itemBilling(prices, count) {
    return this.fixBilling(prices) * count;
  }
}
