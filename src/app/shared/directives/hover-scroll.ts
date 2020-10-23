import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[hover-scroll]',
})
export class HoverDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
  }

  @HostListener('mouseleave') onMouseLeave() {
    document.body.style.overflow = 'hidden';
  }
}
