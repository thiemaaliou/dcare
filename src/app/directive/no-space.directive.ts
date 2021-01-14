import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNoSpace]'
})
export class NoSpaceDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initalValue.replace(/[^\S]/g, '');
    if (initalValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
