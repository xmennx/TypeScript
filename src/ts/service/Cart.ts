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
        return this._items.reduce((total, currentItem) => total + currentItem.price, 0);
    }

    calculateTotalCostWithDiscount(discount: number): number {
        const totalCost = this.calculateTotalCost();
        return totalCost - (totalCost * discount);
    }

    removeItemById(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
