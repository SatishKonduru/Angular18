import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { BackgroundDirective } from '../../directives/background.directive';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [AngularMaterialModule, BackgroundDirective],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent {
@Input() topicName: any
}
