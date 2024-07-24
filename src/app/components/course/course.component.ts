import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  providers: [CourseService]
})
export class CourseComponent implements OnInit{
// courseList = [
//   {id: 1, name: 'Angular', tutor: 'Satish'},
//   {id: 2, name: 'Angular Material', tutor: 'Satish Konduru'},
//   {id: 3, name: 'Bootstrap', tutor: 'RSK'},
//   {id: 4, name: 'NodeJS', tutor: 'Renu'},
// ]
courseList: any = []
courseService = inject(CourseService)
ngOnInit(): void {
    this.getCourseNames()
}

getCourseNames(){
this.courseService.courseNames().subscribe({
  next: (res: any) => {
    console.log("res: ", res)
    this.courseList = res
  },
  error: (err: any) => {
    console.log("Error while getting course names", err)
  }
})
}

}
