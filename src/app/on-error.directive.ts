import { Directive,Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appOnError]'
})
export class OnErrorDirective {
    @Input() appOnError: string;
  constructor(private el: ElementRef) {
   }
   @HostListener('error')
   loadFallbackOnError(){
     const element: HTMLImageElement = <HTMLImageElement>this.el.nativeElement;
     element.src = this.appOnError || 'src\assets\User — Large.png'
   }

}
