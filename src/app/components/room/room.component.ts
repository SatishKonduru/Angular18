import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input() roomValue
  constructor(){
    console.log("Room Constructor called....")
    console.log("roomValue in Room Constructor: ", this.roomValue)
  }
 
}
