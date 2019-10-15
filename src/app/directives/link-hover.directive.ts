import { Directive, ElementRef, Input, HostListener } from '@angular/core';
@Directive({
  selector: '[appLinkHover]'
})
export class LinkHoverDirective{
  constructor(private el:ElementRef){}
  @Input() defaultColor: string;
  @Input('appLinkHover') linkHover: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.linkColor(this.linkHover||this.defaultColor||'red');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.linkColor(null);
  }
  private linkColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
} 