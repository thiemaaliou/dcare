import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {

  constructor() {
  }

  @HostBinding('class.float-label')
  private mustFloat: boolean;

  @HostListener('change', ['$event'])
  onChange($event) {
    this.mustFloat = !!$event.target.value;
  }

  @HostListener('focus', ['$event'])
  onFocus($event) {
    this.mustFloat = true;
  }

  @HostListener('focusout', ['$event'])
  onFocusOut($event) {
    this.mustFloat = !!$event.target.value;
  }

}
