import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-immutablity',
  imports: [],
  templateUrl: './signal-immutablity.component.html',
  styleUrl: './signal-immutablity.component.css',
})
export class SignalImmutablityComponent {
  names = signal(['Satish']);
  emp = signal({ name: 'RSK' });
  std = signal([{ name: 'RENU' }]);
  constructor() {
    setTimeout(() => {
      // console.log('Names: ', this.names());
      // this.names().push('Konduru');
      // this.names.update((v) => [...v, 'Konduru']);
      // console.log('Names: ', this.names());
      this.emp.update((employee) => ({ ...employee, name: 'Family' }));
      this.std.update((std) => [...std, { name: 'SATISH' }]);
    }, 3000);
  }
}
