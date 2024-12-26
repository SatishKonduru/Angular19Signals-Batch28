import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-without-signals',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './without-signals.component.html',
  styleUrl: './without-signals.component.css'
})
export class WithoutSignalsComponent implements OnInit{
  currentCount = 3
  courseNames: any[] = []
  courseNames$: Observable<any>
  private _courseService = inject(CourseService)
  // private _changeDetectorRef = inject(ChangeDetectorRef)

  ngOnInit(): void {
    this.getCourses()
    this.getCourseNames()
  }

  getCourses(){
    this._courseService.getCourseNames().subscribe({
      next: (res: any) => {
        this.courseNames = res
        // this._changeDetectorRef.detectChanges()
        console.log("Courses: ", this.courseNames)
      }
    })
  }

  getCourseNames(){
    // this.courseNames$ = this._courseService.getCourseNames()
    this.courseNames$ = this._courseService.getCoursesWithCount()
  }


  addCourse(){
    this.currentCount++;
    this._courseService.updateVisibleCount(this.currentCount)
    this.getCourseNames()
  }

  removeCourse(){
    this.currentCount--;
    this._courseService.updateVisibleCount(this.currentCount)
    this.getCourseNames()
  }
}
