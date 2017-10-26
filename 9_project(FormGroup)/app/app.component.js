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
    }
    AppComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: ["\n        input.ng-touched.ng-invalid {border:solid red 2px;}\n        input.ng-touched.ng-valid {border:solid green 2px;}\n    "],
        template: "<form #myForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(myForm)\">\n                    <div class=\"form-group\">\n                        <label>\u0418\u043C\u044F</label>\n                        <input class=\"form-control\" name=\"name\" ngModel required />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Email</label>\n                        <input class=\"form-control\" name=\"email\" ngModel \n                            required pattern=\"[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <label>\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\n                        <input class=\"form-control\" name=\"phone\" ngModel \n                            required pattern=\"[0-9]{10}\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" [disabled]=\"myForm.invalid\" class=\"btn btn-default\" value=\"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\" />\n                    </div>\n                </form>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map