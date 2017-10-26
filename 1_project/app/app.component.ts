import { Component } from "@angular/core";
import { Item } from "./item"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    items: Item[] = [
        new Item("Хлеб", 15.9),
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price: 310 }
    ];
    addItem(text: string, price: number): void {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    }
}