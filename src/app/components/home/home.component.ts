import { Component } from '@angular/core';
import { RoomComponent } from '../room/room.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RoomComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sendingValue: any
  constructor(){
    console.log("Home Constructor is called")
  }
}
