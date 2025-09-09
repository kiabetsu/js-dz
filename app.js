class Billing {
  amount = 0;

  calculateTotal(prices) {
    this.amount = prices.reduce((acc, value) => (acc += value), 0);
  }
}

class FixBilling extends Billing {
  fixBilling(prices) {
    this.calculateTotal(prices);
    return this.amount;
  }
}

class HourBilling extends FixBilling {
  hourBilling(prices, hours) {
    return this.fixBilling(prices) * hours;
  }
}

class ItemBilling extends FixBilling {
  itemBilling(prices, count) {
    return this.fixBilling(prices) * count;
  }
}
