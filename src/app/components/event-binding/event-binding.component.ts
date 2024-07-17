import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  name = ""
  getName(){
    this.name = 'Satish'
  }
  clear(){
    this.name = ''
  }
 
}
