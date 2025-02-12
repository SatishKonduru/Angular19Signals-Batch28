import {
  Component,
  effect,
  EffectRef,
  inject,
  Injector,
  runInInjectionContext,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-counter-with-signals',
  imports: [],
  templateUrl: './counter-with-signals.component.html',
  styleUrl: './counter-with-signals.component.css',
})
export class CounterWithSignalsComponent {
  readonly value = signal(0);
  readonly injector = inject(Injector);
  private _effectRef: EffectRef | null = null;
  private _intervalId: any = null;
  constructor() {
    // setInterval(() => {
    //   this.value.update((v) => v + 1);
    // }, 1000);
    // effect(() => console.log('Value :', this.value()));
  }

  start() {
    // runInInjectionContext(this.injector, () =>
    //   effect(() => console.log('Value :', this.value()))
    // );
    // effect(
    //   () => {
    //     console.log('Value: ', this.value());
    //   },
    //   { injector: this.injector }
    // );
    // if (this._effectRef) {
    //   return;
    // }
    // this._effectRef = effect(() => console.log('Value: ', this.value()), {
    //   injector: this.injector,
    // });
    if (!this._intervalId) {
      this._intervalId = setInterval(() => {
        this.value.update((v) => v + 1);
      }, 1000);
    }
    if (!this._effectRef) {
      this._effectRef = effect(
        () => {
          console.log('Value: ', this.value());
        },
        { injector: this.injector }
      );
    }
  }

  stop() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
    if (this._effectRef) {
      this._effectRef.destroy();
      this._effectRef = null;
    }
  }
}
