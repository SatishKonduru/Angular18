import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  childProperty = 'Hello from Child!';
 
  
  childMethod() {
    console.log('Method in Child Component');
   
  }
}
