import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: [`h2, p {color:yellow;}`]
})
export class AppComponent {
    name = 'Tom';
}