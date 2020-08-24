import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor() { }
  @HostBinding('class.float-label')private mustFloat: boolean;

  @HostListener('change', ['$event'])
  onChange($event) {
    console.log($event);
    this.mustFloat = $event.target.value ? true :  false;
  }

  @HostListener('focus', ['$event'])
  onFocus($event) {
    console.log($event.target.value);
    this.mustFloat = true;
  }

  @HostListener('focusout', ['$event'])
  onFocusOut($event) {
    this.mustFloat = $event.target.value ? true :  false;
  }

}
