import { Component } from '@angular/core';
import { PercentagePipe } from '../../pipes/percentage.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [PercentagePipe, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule, CommonModule, FilterPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
 name = 'Satish'
 score: any
 total = 1000
 filterText = 'All'
 students = [
  {name: 'Satish', age : 44, gender : 'Male'},
  {name: 'Renu', age : 37, gender : 'Female'},
  {name: 'RSK', age : 40, gender : 'Male'},
  {name: 'Sita', age : 24, gender : 'Female'},
 ]




 onClick(marks : any){
  this.score = marks
 }

 filterData = this.students
 onSelect(e: any){
  console.log("Seleted: ", e.value)
  
  this.filterText = e.value
  // if (this.filterText === 'All') {
  //   this.filterData = this.students;
  // } else {
  //  this.filterData = this.students.filter(student => student.gender === this.filterText);
  // }
 }
 addNewData(){
  const newStudent = {
    name: 'Chikkie',
    age: 13,
    gender: 'Female' 
  }
  this.students.push(newStudent)
 }
}
