import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  name = "Satish Konduru"
  age = 10
  
  getName(){
    return this.name
  }

}
