import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class BoldDirective implements OnInit{

    @Input("bold")
    selectedSize = "18px";
    
    @Input()
    defaultSize = "16px";

    private fontSize = "18px";

    private fontWeight = "normal";

    ngOnInit(){
        this.fontSize = this.defaultSize;
    }

    @HostBinding("style.fontSize")
    get getFontSize(){
        return this.fontSize;
    }

    @HostBinding("style.fontWeight")
    get getFontWeight(){
        return this.fontWeight;
    }

    @HostBinding("style.cursor")
    get getCursor(){
        return "pointer";
    }

    onMouseEnter() {
        this.fontWeight = "bold";
        this.fontSize = this.selectedSize;
    }

    onMouseLeave() {
        this.fontWeight = "normal";
        this.fontSize = this.defaultSize;
    }
 

}