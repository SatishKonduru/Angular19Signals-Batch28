import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { interval, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnInit {
  // values: Subscription;
  values$: Observable<any>;
  // private _destroyRef = inject(DestroyRef);
  constructor() {}
  ngOnInit(): void {
    const _destroyRef = inject(DestroyRef);
    // this.values = interval(1000).subscribe(console.log);
    // this._destroyRef.onDestroy(() => this.values.unsubscribe());
    this.values$ = interval(1000).pipe(tap((v) => console.log('Value: ', v)));
  }

  // ngOnDestroy(): void {
  //   this.values.unsubscribe();
  // }
}
