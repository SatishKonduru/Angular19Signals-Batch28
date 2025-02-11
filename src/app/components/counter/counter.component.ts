import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  Injector,
  OnDestroy,
  OnInit,
  runInInjectionContext,
} from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';
import { counter } from '../../utilityFn';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  // // values: Subscription;
  // values$: Observable<any>;
  // // private _destroyRef = inject(DestroyRef);
  // constructor() {}
  // ngOnInit(): void {
  //   const _destroyRef = inject(DestroyRef);
  //   // this.values = interval(1000).subscribe(console.log);
  //   // this._destroyRef.onDestroy(() => this.values.unsubscribe());
  //   this.values$ = interval(1000).pipe(tap((v) => console.log('Value: ', v)));
  // }

  // // ngOnDestroy(): void {
  // //   this.values.unsubscribe();
  // // }
  // private _dr = inject(DestroyRef);
  private _injector = inject(Injector);
  constructor() {
    // counter();
  }

  ngOnInit() {
    // counter(this._dr);
    runInInjectionContext(this._injector, () => {
      counter();
    });
  }
}
