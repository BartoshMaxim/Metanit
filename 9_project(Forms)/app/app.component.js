"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var phone_1 = require("./phone");
var AppComponent = (function () {
    function AppComponent() {
        this.phone = new phone_1.Phone("", 0, "Huawei");
        this.phones = [];
        this.companies = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
    }
    AppComponent.prototype.onTitleChange = function () {
        if (this.phone.title == "нет")
            this.phone.title = "не известно";
    };
    AppComponent.prototype.addPhone = function () {
        //this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
        console.log(this.phone.title);
        console.log(this.phone.price);
        console.log(this.phone.company);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"col-xs-8\"> \n    <div class=\"form-group\">\n        <label>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438</label>\n        <input class=\"form-control\" name=\"title\" [(ngModel)]=\"phone.title\" #phoneTitle=\"ngModel\" (ngModelChange)=\"onTitleChange()\" />\n    </div>\n    <div class=\"form-group\">\n        <label>\u0426\u0435\u043D\u0430</label>\n        <input type=\"number\" class=\"form-control\" name=\"price\" [(ngModel)]=\"phone.price\"  #phonePrice=\"ngModel\" />\n    </div>\n    <div class=\"form-group\">\n        <label>\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C</label>\n        <select class=\"form-control\" name=\"company\" [(ngModel)]=\"phone.company\" #phoneCompany=\"ngModel\">\n            <option  *ngFor=\"let comp of companies\" [value]=\"comp\">\n                {{comp}}\n            </option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-default\" (click)=\"addPhone()\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </div>\n    <div>\n        <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>\n        <p>{{phonePrice.name}} : {{phonePrice.model}}</p>\n        <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>\n    </div>\n</div>\n<div>\n    <h3>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B</h3>\n    <ul *ngFor=\"let p of phones\">\n        <li>{{p.title}} ({{p.company}}) - {{p.price}}</li>\n    </ul>\n</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map