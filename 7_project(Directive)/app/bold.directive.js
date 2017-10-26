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
var BoldDirective = (function () {
    function BoldDirective() {
        this.selectedSize = "18px";
        this.defaultSize = "16px";
        this.fontSize = "18px";
        this.fontWeight = "normal";
    }
    BoldDirective.prototype.ngOnInit = function () {
        this.fontSize = this.defaultSize;
    };
    Object.defineProperty(BoldDirective.prototype, "getFontSize", {
        get: function () {
            return this.fontSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoldDirective.prototype, "getFontWeight", {
        get: function () {
            return this.fontWeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoldDirective.prototype, "getCursor", {
        get: function () {
            return "pointer";
        },
        enumerable: true,
        configurable: true
    });
    BoldDirective.prototype.onMouseEnter = function () {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    };
    BoldDirective.prototype.onMouseLeave = function () {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    };
    return BoldDirective;
}());
__decorate([
    core_1.Input("bold"),
    __metadata("design:type", Object)
], BoldDirective.prototype, "selectedSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BoldDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding("style.fontSize"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getFontSize", null);
__decorate([
    core_1.HostBinding("style.fontWeight"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getFontWeight", null);
__decorate([
    core_1.HostBinding("style.cursor"),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getCursor", null);
BoldDirective = __decorate([
    core_1.Directive({
        selector: '[bold]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
        }
    })
], BoldDirective);
exports.BoldDirective = BoldDirective;
//# sourceMappingURL=bold.directive.js.map