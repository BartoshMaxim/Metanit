"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
        this.name = "Евгений";
    }
    return ChildComponent;
}());
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<ng-content></ng-content>\n          <p>\u041F\u0440\u0438\u0432\u0435\u0442 {{name}}</p>",
        styles: ["h2, p {color:red;}"]
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map