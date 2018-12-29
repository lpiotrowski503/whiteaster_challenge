import { Directive, HostBinding, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input() appColor
  @HostBinding('style.color') color
  ngOnInit() {
    if (this.appColor === 'W terminie') this.color = 'green'
    if (this.appColor === 'Opóźniony') this.color = 'red'
    if (this.appColor === 'label') this.color = '#787878'
  }
}
