import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
  textColor = 'red'
  textSize = '20px'
  myValue = 20
  myStyle = {
    color: this.textColor,
    fontSize: this.textSize
  }
}
