import { Component, effect, inject, linkedSignal, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linked-signal',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  readonly courseNames = signal<any[]>([])
  readonly currentCount = signal<number>(3)
  private _courseService = inject(CourseService)

  readonly linkedCourses = linkedSignal(this.currentCount, {
    equal: (prev: number, next: number) => prev == next
  })

  constructor(){
    effect(() => {
        const count = this.linkedCourses();
        this._courseService.getCoursesWithCountForSignal(count).forEach(courses => {
          this.courseNames.update(() => courses)
        })
    })
  }

  addCourse(){
    this.currentCount.update(count => count + 1)
  }
  removeCourse(){
    this.currentCount.update(count => count - 1)
  }
}
