import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent {
  @Input() data : string;
  @Input() content : string;

}
