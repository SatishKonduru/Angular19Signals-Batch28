import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Angular19Signals';
  changeDetector = inject(ChangeDetectorRef)

  counter = 0;
  constructor(){
    setInterval(() => {
      this.counter++
      console.log("Counter: ", this.counter)
    }, 1000 )


    setInterval(() => {
      this.changeDetector.detectChanges()
    }, 5000)
  }

  doNothing(){

  }

}
