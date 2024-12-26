import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-with-signals',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './with-signals.component.html',
  styleUrl: './with-signals.component.css'
})
export class WithSignalsComponent {
  private _courseService = inject(CourseService)
  readonly courseNames = signal<string[]>([])
  readonly currentCount = signal<number>(3)
  constructor(){
    effect(() => {
      //   this._courseService.getCourseNames().forEach((data: string[]) => {
      //   this.courseNames.update(cValue => [...cValue, ...data])
      // })
      const count = this.currentCount()
      this._courseService.getCoursesWithCountForSignal(count).forEach(courses => {
        this.courseNames.update(()=> courses)
      })
    }
  )
  }
  addCourse(){
    this.currentCount.update(count => count + 1)
  }
  removeCourse(){
    this.currentCount.update(count => count - 1)
  }


}
