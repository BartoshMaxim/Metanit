export class Item {
    purchase: string;
    done: boolean;
    price: number;

    constructor(purchase: string, price: number) {
        this.done = false;
        this.purchase = purchase;
        this.price = price;
    }
}