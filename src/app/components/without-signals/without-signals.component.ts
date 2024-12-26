import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-without-signals',
  imports: [CommonModule],
  templateUrl: './without-signals.component.html',
  styleUrl: './without-signals.component.css'
})
export class WithoutSignalsComponent implements OnInit{
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
    this.courseNames$ = this._courseService.getCourseNames()
  }

}
