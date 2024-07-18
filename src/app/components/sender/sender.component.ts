import { Component, Input } from '@angular/core';
import { ReceiverComponent } from "../receiver/receiver.component";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { TopicComponent } from '../topic/topic.component';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [ReceiverComponent, CommonModule, AngularMaterialModule, TopicComponent],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  message = "This Message is from Sender Componenet"
  @Input() replyMan: any
  incomingMsg: any
  topic = 'Component Communication'
}
