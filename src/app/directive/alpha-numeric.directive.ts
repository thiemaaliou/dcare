import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAlphaNumeric]'
})
export class AlphaNumericDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.elRef.nativeElement.value;
    this.elRef.nativeElement.value = initalValue.replace(/[^\w]/g, '');
    if (initalValue !== this.elRef.nativeElement.value) {
      event.stopPropagation();
    }
  }
//import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// import { NgControl } from '@angular/forms';
//
// @Directive({
//   selector: 'input[type=number], input[numbersOnly]'
// })
// export class NumbersOnlyInputDirective {
//
//   constructor(private elRef: ElementRef) { }
//
//   @HostListener('input', ['$event']) onInputChange(event) {
//     const initalValue = this.elRef.nativeElement.value;
//     this.elRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
//     if ( initalValue !== this.elRef.nativeElement.value) {
//       event.stopPropagation();
//     }
//   }
//
// }
}
