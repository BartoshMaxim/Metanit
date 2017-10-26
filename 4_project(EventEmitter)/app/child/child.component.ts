import { Output, Input, EventEmitter, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html'
})
export class ChildComponent {
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
    }
}