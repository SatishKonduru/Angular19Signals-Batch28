import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _URL = "Data/courses.json"
  private _http = inject(HttpClient)
  private visibleCount = new BehaviorSubject<number>(3)
  private courses: any[] = []
  constructor() { }

  getCourseNames(): Observable<any>{
    // return this._http.get<any>(this._URL)
    // if courses are already fetched return them from local cache
    if(this.courses.length > 0){
      return of(this.courses)
    }
    //if courses are not fetched yet, fetch from API
    return this._http.get<any[]>(this._URL).pipe(map(data => {
      this.courses = data
      return this.courses
    }),
    catchError(() => {
      return of([])
    })
    )

  }

  getCoursesWithCount(): Observable<any>{
    return this.getCourseNames().pipe(
      map(courses => {
        return courses.slice(0, this.visibleCount.value)
      })
    )

  }

  updateVisibleCount(count: number){
    this.visibleCount.next(count)
  }

  getCoursesWithCountForSignal(count: number): Observable<any[]>{
    return this.getCourseNames().pipe(
      map(courses => {
        return courses.slice(0, count)
      })
    )
  }


}
