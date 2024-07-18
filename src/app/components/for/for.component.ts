import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  numbers = [10,20,30,40,50]
  persons = [
    {name: 'Satish', age: 20},
    {name: 'Renu', age: 10},
    {name: 'RSK', age: 30}
  ]

  courses = []

}
