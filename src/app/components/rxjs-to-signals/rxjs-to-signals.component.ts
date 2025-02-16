import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-rxjs-to-signals',
  imports: [MatChipsModule],
  templateUrl: './rxjs-to-signals.component.html',
  styleUrl: './rxjs-to-signals.component.css',
})
export class RxjsToSignalsComponent {
  private _http = inject(HttpClient);
  private _URL = 'http://jsonplaceholder.typicode.com/users/2';

  // RxJS Observable
  private userObservable$ = this._http.get<{ name: string; email: string }>(
    this._URL
  );

  // Convert observable into signal
  user = toSignal(this.userObservable$);
}
