import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
courseList = [
  {id: 1, name: 'Angular', tutor: 'Satish'},
  {id: 2, name: 'Angular Material', tutor: 'Satish Konduru'},
  {id: 3, name: 'Bootstrap', tutor: 'RSK'},
  {id: 4, name: 'NodeJS', tutor: 'Renu'},
]
}
