import { T } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-selected-course',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  templateUrl: './selected-course.component.html',
  styleUrl: './selected-course.component.css'
})
export class SelectedCourseComponent {
  myCourse: any ;
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
 ngOnInit(){
  this.activatedRoute.paramMap.subscribe(params => {
    // const getParams = params.get('course')
    this.myCourse = JSON.parse(params.get('course'))
  })
  // this.activatedRoute.queryParams.subscribe(p => {
  //   this.myCourse = JSON.parse(p['course'])
  // })
  console.log("Selected Course:", this.myCourse)
 }
 goBack(){
  this.router.navigate(['/courseDetails', this.myCourse.id])
  }
  viewDetails(){
    console.log("this.activatedRoute", this.activatedRoute)
    this.router.navigate(['selectedCourseDetails'], {relativeTo: this.activatedRoute})
  }
}
