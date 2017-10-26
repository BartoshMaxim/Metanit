"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.condition = true;
        this.count = 5;
        this.items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
    }
    AppComponent.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<ul>\n                    <li *ngFor=\"let item of items; let i = index\">{{i+1}}.{{item}}</li>\n                </ul>\n                <div ngSwitch=\"count\">\n                    <template *ngSwitchCase=\"1\">{{count * 100}}</template>\n                    <template *ngSwitchCase=\"2\">{{count * 1000}}</template>\n                    <template ngSwitchDefault>{{count * 10000}}</template>\n                </div>\n                \n                <p *while=\"condition\">\n                First P\n                </p>\n\n                <p *while=\"!condition\">\n                Second P\n                </p>\n                <button (click)=\"toggle()\">Toggle</button>\n                "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map