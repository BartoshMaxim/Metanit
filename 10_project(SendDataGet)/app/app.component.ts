import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Component({
    selector: 'my-app',
    template: `<div *ngIf="done">{{factorial}}</div>
                <div class="form-group">
                    <label>Введите число</label>
                    <input class="form-control" type="number" name="factorial" [(ngModel)]="num" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(num)">Отправить</button>
                </div>`,
    providers: [HttpService]
})
export class AppComponent {

    factorial: number;
    done: boolean = false;
    constructor(private httpService: HttpService) { }
    submit(num: number) {
        console.log(num);
        this.httpService.getFactorial(num)
            .subscribe((data) => { this.factorial = data; this.done = true; });
    }
}