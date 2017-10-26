import { Component } from '@angular/core';
import { Phone } from './phone';

@Component({
    selector: 'my-app',
    template: `<div class="col-xs-8"> 
    <div class="form-group">
        <label>Название модели</label>
        <input class="form-control" name="title" [(ngModel)]="phone.title" #phoneTitle="ngModel" (ngModelChange)="onTitleChange()" />
    </div>
    <div class="form-group">
        <label>Цена</label>
        <input type="number" class="form-control" name="price" [(ngModel)]="phone.price"  #phonePrice="ngModel" />
    </div>
    <div class="form-group">
        <label>Производитель</label>
        <select class="form-control" name="company" [(ngModel)]="phone.company" #phoneCompany="ngModel">
            <option  *ngFor="let comp of companies" [value]="comp">
                {{comp}}
            </option>
        </select>
    </div>
    <div class="form-group">
        <button class="btn btn-default" (click)="addPhone()">Добавить</button>
    </div>
    <div>
        <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
        <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
        <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
    </div>
</div>
<div>
    <h3>Добавленные элементы</h3>
    <ul *ngFor="let p of phones">
        <li>{{p.title}} ({{p.company}}) - {{p.price}}</li>
    </ul>
</div>`
})
export class AppComponent {

    phone: Phone = new Phone("", 0, "Huawei");

    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    onTitleChange() {
        if (this.phone.title == "нет")
            this.phone.title = "не известно";
    }

    addPhone() {
        //this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
        console.log(this.phone.title);
        console.log(this.phone.price);
        console.log(this.phone.company);
    }
}