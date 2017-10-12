import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropDownDirective {

  private isOpen = false;
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('click', ['$event']) open(event: any) {
    event.preventDefault();
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
}
