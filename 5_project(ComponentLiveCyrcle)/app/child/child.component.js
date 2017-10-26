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
var ChildComponent = (function () {
    function ChildComponent() {
        this.count = 1;
    }
    ChildComponent.prototype.ngOnInit = function () {
        this.log("ngOnInit");
    };
    ChildComponent.prototype.ngOnChanges = function () {
        this.log("OnChanges");
    };
    ChildComponent.prototype.ngDoCheck = function () {
        this.log("ngDoCheck");
    };
    ChildComponent.prototype.ngAfterViewInit = function () {
        this.log("ngAfterViewInit");
    };
    ChildComponent.prototype.ngAfterViewChecked = function () {
        this.log("ngAfterViewChecked");
    };
    ChildComponent.prototype.ngAfterContentInit = function () {
        this.log("ngAfterContentInit");
    };
    ChildComponent.prototype.ngAfterContentChecked = function () {
        this.log("ngAfterContentChecked");
    };
    ChildComponent.prototype.log = function (msg) {
        console.log(this.count + ". " + msg);
        this.count++;
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "name", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<p>\u041F\u0440\u0438\u0432\u0435\u0442 {{name}}</p>"
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map