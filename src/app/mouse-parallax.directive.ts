import { Directive, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[appMouseParallax]'
})
export class MouseParallaxDirective implements AfterViewInit  {
  // @ViewChild("appMouseParallax") appMouseParallax: ElementRef;
  
  constructor(private element: ElementRef) { 
  }

  ngAfterViewInit() {
    let movementStrength = 25;
    let height = movementStrength / window.innerHeight;
    let width = movementStrength / window.innerWidth;
    let parallaxElement = this.element.nativeElement
    // this.element.nativeElement.onmousemove = function(e) {
    window.onmousemove = (e) => {
      let pageX = e.pageX - (window.innerWidth / 2);
      let pageY = e.pageY - (window.innerHeight / 2);
      let newvalueX = width * pageX * -1 - 25;
      let newvalueY = height * pageY * -1 - 50;
      console.log( newvalueX +"px " + newvalueY + "px")
      // debugger
      parallaxElement.style.backgroundPosition = newvalueX +"px " + newvalueY + "px";
    };
  }
}
