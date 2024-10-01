export class Inventory {
  private items: { [name: string]: { quantity: number; price: number } } = {};

  addItem(name: string, quantity: number, price: number): void {
    if (this.items[name]) {
      this.items[name].quantity += quantity;
    } else {
      this.items[name] = { quantity, price };
    }
  }

  removeItem(name: string, quantity: number): void {
    if (this.items[name]) {
      if (this.items[name].quantity >= quantity) {
        this.items[name].quantity -= quantity;
        if (this.items[name].quantity === 0) {
          delete this.items[name];
        }
      } else {
        throw new Error("Not enough stock to remove");
      }
    } else {
      throw new Error("Item not found in inventory");
    }
  }

  checkStock(name: string): number {
    return this.items[name] ? this.items[name].quantity : 0;
  }

  totalValue(): number {
    let total = 0;
    for (const item of Object.values(this.items)) {
      total += item.quantity * item.price;
    }
    return total;
  }
}
