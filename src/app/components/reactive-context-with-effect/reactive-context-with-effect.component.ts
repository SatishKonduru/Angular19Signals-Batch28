import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-reactive-context-with-effect',
  imports: [],
  templateUrl: './reactive-context-with-effect.component.html',
  styleUrl: './reactive-context-with-effect.component.css',
})
export class ReactiveContextWithEffectComponent {
  readonly x = signal(100);
  readonly y = signal(0);
  constructor() {
    effect(() => {
      if (this.x() > 105) {
        console.log('X is greater than 105');
        this.y.set(200);
      }
    });
    // effect(() => {
    //   this.y.set(this.x() + 1);
    //   this.x.set(this.y() + 1);
    // });
  }
  incrementX() {
    this.x.update((v) => v + 1);
  }
}
