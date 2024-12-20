import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, combineLatest, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  // title = 'Angular19Signals';
  // changeDetector = inject(ChangeDetectorRef)

  // counter = 0;
  // constructor(){
  //   setInterval(() => {
  //     this.counter++
  //     this.changeDetector.detectChanges()
  //     console.log("Counter: ", this.counter)
  //   }, 1000 )


  //   // setInterval(() => {
  //   //   this.changeDetector.detectChanges()
  //   // }, 1000)
  // }

  // doNothing(){
  //   console.log("Do Nothing....")
  // }

  // randomNumber(){
  //   console.log("Random Number Called...")
  //   return 100;
  // }

  // counter$ = interval(1000)
  // constructor(){}
  // randomNumber(){
  //   console.log("Random Number Called....")
  //   return 100;
  // }

    colors$ = new BehaviorSubject<any>({r: 'Red', g: 'Green', b: 'Blue'})
    colorKey$ = new BehaviorSubject('g')

    selectedValue$ = combineLatest([this.colors$, this.colorKey$]).pipe(

      map(([color, key]) => color[key])
    )

    colorObj = {r: 'Red', g: 'Green', b: 'Blue'}
    key = 'g'

    constructor(){
      this.selectedValue$.subscribe(console.log)
    }

    newColor(){
      this.colors$.next({y: 'Yellow', o: 'Orange', p: 'Purple'})
      this.colorKey$.next('p')
    }
}
