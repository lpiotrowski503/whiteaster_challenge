import { Directive, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.borderLeft') borderLeft
  @HostBinding('style.boxShadow') boxShadow
  @HostBinding('style.paddingLeft') paddingLeft
  @HostBinding('style.transform') transform

  constructor() {}

  @HostListener('mouseover')
  hover() {
    this.borderLeft = '5px solid #ff9900'
    this.boxShadow = '0 0 5px 5px #dadada'
    this.paddingLeft = '10px'
    this.transform = 'scale(1.01)'
  }

  @HostListener('mouseout')
  leave() {
    this.borderLeft = ''
    this.boxShadow = ''
    this.paddingLeft = ''
    this.transform = ''
  }
}
