import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<ul>
                    <li *ngFor="let item of items; let i = index">{{i+1}}.{{item}}</li>
                </ul>
                <div ngSwitch="count">
                    <template *ngSwitchCase="1">{{count * 100}}</template>
                    <template *ngSwitchCase="2">{{count * 1000}}</template>
                    <template ngSwitchDefault>{{count * 10000}}</template>
                </div>
                
                <p *while="condition">
                First P
                </p>

                <p *while="!condition">
                Second P
                </p>
                <button (click)="toggle()">Toggle</button>
                `                
})
export class AppComponent {

    condition : boolean = true;
    count: number = 5;
    items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];

    toggle(){
        this.condition = !this.condition;
    }
}