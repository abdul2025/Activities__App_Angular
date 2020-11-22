import { Directive, ElementRef, HostListener, Renderer2, ViewChild, AfterViewInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAddingHours]'
})
export class AddingHoursDirective implements OnChanges {
  @HostListener('mouseenter', ['$event']) addPadding(event: Event) {
    console.log(this.elRef.nativeElement);
  }



  ngOnChanges() {
    console.log('jj');
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}
