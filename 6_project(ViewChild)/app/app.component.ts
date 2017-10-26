import { Component, ViewChild } from '@angular/core';
import { ChildComponent} from './child/child.component';
       
@Component({
    selector: 'my-app',
    template: `<child-comp></child-comp>
                <button (click)="increment()">+</button>
                <button (click)="decrement()">-</button>`
})
export class AppComponent { 
 
    @ViewChild(ChildComponent)
    private counterComponent: ChildComponent;
     
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }
}