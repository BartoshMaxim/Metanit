"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("./http.service");
var user_1 = require("./user");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.user = new user_1.User(); // данные вводимого пользователя
        this.done = false;
    }
    AppComponent.prototype.submit = function (user) {
        var _this = this;
        this.httpService.postData(user)
            .subscribe(function (data) { _this.receivedUser = data; _this.done = true; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div class=\"form-group\">\n                    <label>\u0418\u043C\u044F</label>\n                    <input class=\"form-control\" name=\"username\" [(ngModel)]=\"user.name\" />\n                </div>\n                <div class=\"form-group\">\n                    <label>\u0412\u043E\u0437\u0440\u0430\u0441\u0442</label>\n                    <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"user.age\" />\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-default\" (click)=\"submit(user)\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n                </div>\n                <div *ngIf=\"done\">\n                    <div>\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:</div>\n                    <div>\u0418\u043C\u044F: {{receivedUser.name}}</div>\n                    <div>\u0412\u043E\u0437\u0440\u0430\u0441\u0442: {{receivedUser.age}}</div>\n                </div>",
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map