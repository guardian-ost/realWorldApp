import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  constructor(private elem: ElementRef) { 

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('#000');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('#999');
  }

  private highLight(color:string): void {
    this.elem.nativeElement.style.color = color;
  } 


}
