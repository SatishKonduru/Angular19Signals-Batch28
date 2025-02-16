import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-signal-to-rxjs',
  imports: [MatChipsModule],
  templateUrl: './signal-to-rxjs.component.html',
  styleUrl: './signal-to-rxjs.component.css',
})
export class SignalToRxjsComponent {
  searchQuery = signal('');
  private _searchQuery$ = toObservable(this.searchQuery);
  textForSearch = '';
  constructor() {
    this._searchQuery$.subscribe((res) => (this.textForSearch = res));
  }
}
