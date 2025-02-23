import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  interval,
  map,
  withLatestFrom,
} from 'rxjs';
import { WithoutSignalsComponent } from './components/without-signals/without-signals.component';
import { WithSignalsComponent } from './components/with-signals/with-signals.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterWithSignalsComponent } from './components/counter-with-signals/counter-with-signals.component';
import { ReactiveContextWithEffectComponent } from './components/reactive-context-with-effect/reactive-context-with-effect.component';
import { RxjsToSignalsComponent } from './components/rxjs-to-signals/rxjs-to-signals.component';
import { SignalToRxjsComponent } from './components/signal-to-rxjs/signal-to-rxjs.component';
import { SignalImmutablityComponent } from './components/signal-immutablity/signal-immutablity.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    InputComponent,
    OutputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // // title = 'Angular19Signals';
  // // changeDetector = inject(ChangeDetectorRef)
  // // counter = 0;
  // // constructor(){
  // //   setInterval(() => {
  // //     this.counter++
  // //     this.changeDetector.detectChanges()
  // //     console.log("Counter: ", this.counter)
  // //   }, 1000 )
  // //   // setInterval(() => {
  // //   //   this.changeDetector.detectChanges()
  // //   // }, 1000)
  // // }
  // // doNothing(){
  // //   console.log("Do Nothing....")
  // // }
  // // randomNumber(){
  // //   console.log("Random Number Called...")
  // //   return 100;
  // // }
  // // counter$ = interval(1000)
  // // constructor(){}
  // // randomNumber(){
  // //   console.log("Random Number Called....")
  // //   return 100;
  // // }
  //   colors$ = new BehaviorSubject<any>({r: 'Red', g: 'Green', b: 'Blue'})
  //   colorKey$ = new BehaviorSubject('g')
  //   // selectedValue$ = combineLatest([this.colors$, this.colorKey$]).pipe(
  //   //   map(([color, key]) => color[key])
  //   // )
  //   // selectedValue$ = combineLatest([this.colors$, this.colorKey$]).pipe(
  //   //   debounceTime(1000),
  //   //   map(([color, key]) => color[key])
  //   // )
  //   selectedValue$ = this.colorKey$.pipe(
  //     withLatestFrom(this.colors$),
  //     map(([key,color ]) => color[key])
  //   )
  //   colorObj = {r: 'Red', g: 'Green', b: 'Blue'}
  //   key = 'g'
  //   constructor(){
  //     this.selectedValue$.subscribe(console.log)
  //   }
  //   newColor(){
  //     this.colors$.next({y: 'Yellow', o: 'Orange', p: 'Purple'})
  //     this.colorKey$.next('y')
  //   }
  // readonly firstSignal = signal(100)
  //   constructor(){
  //    effect(() => {
  //     // this.firstSignal()
  //     this.firstSignal.update(v => v + 10)
  //     // console.log("First Signal : ", this.firstSignal())
  //      // localStorage.setItem('Signal', this.firstSignal().toString())
  //    })
  // }
  // setSignal(){
  //   this.firstSignal.set(777)
  // }
  // updateSignal(){
  //   this.firstSignal.update(value => value + 1)
  // }
  // readonly derivedSignal = computed(() => this.firstSignal() * 2)
  // readonly x = signal(10)
  // readonly y = signal(20)
  // readonly newSignal = computed(() => this.x() + this.y())
  // showCounter = false;
  // toggleCounter() {
  //   this.showCounter = !this.showCounter;
  // }
  // firstValue: number;
  // secondValue: number;
  // msg: any;
  // username: string = '';
  username = signal('');
}
