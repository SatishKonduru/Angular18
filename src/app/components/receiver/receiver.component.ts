import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SenderComponent } from "../sender/sender.component";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent {
@Input()  postman: any

@Output() reply = new EventEmitter()
replyMessage(){
  this.reply.emit('This message is from Receiver Component')
}
}
