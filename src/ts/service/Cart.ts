import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotalCost(): number {
      return this. _items.reduce((total, this.item) => total + this.items.price, 0)
    }

    calculateTotalCostWithDiscount(discount: number): number {
      const totalCostDiscount = this.calculateTotalCost();
      return totalCostDiscount - (totalCostDiscount * discount);
    }

    removeItemById(id: number): void {
      this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}