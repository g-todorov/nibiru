import { Directive, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMouseParallax]'
})
export class MouseParallaxDirective implements AfterViewInit, OnDestroy  {
  // TODO This is the better approach
  // @ViewChild("appMouseParallax") appMouseParallax: ElementRef;

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit() {
    const movementStrength = 25;
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;

    window.onmousemove = (e) => {
      const pageX = e.pageX - (window.innerWidth / 2);
      const pageY = e.pageY - (window.innerHeight / 2);
      const newvalueX = width * pageX * -1 - 25;
      const newvalueY = height * pageY * -1 - 50;
      this.element.nativeElement.style.backgroundPosition = newvalueX + 'px ' + newvalueY + 'px';
    };
  }

  ngOnDestroy() {
    // TODO add/remove event listener
  }
}
