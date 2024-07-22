import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  courseList = [
    {id: 1, name: 'Angular', tutor: 'Satish'},
    {id: 2, name: 'Angular Material', tutor: 'Satish Konduru'},
    {id: 3, name: 'Bootstrap', tutor: 'RSK'},
    {id: 4, name: 'NodeJS', tutor: 'Renu'}
  ]
  router = inject(Router)
  courseKeys: string[];
  activatedRoute = inject(ActivatedRoute)
  selected = 'selected'
  courseId : any
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      if(params){
        this.courseId = params.get('id')
      }
    })
    this.courseKeys = Object.keys(this.courseList[0]);
    // console.log("Object.keys(this.courseList[0]):::::", Object.keys(this.courseList[0]))
  }
  onSelect(course: any){
    console.log("Selected Course: ", course)
    this.router.navigate(['/selectedCourse', JSON.stringify(course)] ) //Route parameters
    //using QueryParams
    // this.router.navigate(['/selectedCourse'], {queryParams: {course: JSON.stringify(course)}})
  }
  getSelected(course: any){
    return course.id == this.courseId
  }
}
