import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1 *ngIf="visibility;else unset">Hello Angular 2</h1>
             <div [ngClass]="{invisible: visibility}">
             <ng-template #unset>
                <h1>HeLlO AnGuLaR 2</h1>
             </ng-template>
             <p [bold]="'28px'" [defaultSize]="'14px'">
                 Angular 2 представляет модульную архитектуру приложения
             </p>
         </div>
         <button (click)="toggle()">Toggle</button>`,
    styles: [`.invisible{display:none;}`]
})
export class AppComponent {

    visibility: boolean = true;
    // переключаем переменную
    toggle() {
        this.visibility = !this.visibility;
    }
}