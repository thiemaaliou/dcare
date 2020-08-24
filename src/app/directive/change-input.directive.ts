import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[changeInput]'
})
export class ChangeInputDirective implements OnChanges {
    @Input() public changeInput: any;
    @Input() public input: any;

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }
}
