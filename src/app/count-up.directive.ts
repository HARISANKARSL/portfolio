import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appCountUp]'
})
export class CountUpDirective {

  constructor() { }
  @Input('countUp') // input name is the same as selector name
  set count(count: number) {}

  @Input()
  set duration(duration: number) {}
}
