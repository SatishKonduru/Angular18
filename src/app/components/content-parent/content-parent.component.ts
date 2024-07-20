import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { TopicComponent } from '../topic/topic.component';
import { ChildComponent } from '../child/child.component';
import { ContentChildComponent } from '../content-child/content-child.component';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-content-parent',
  standalone: true,
  imports: [TopicComponent, AngularMaterialModule],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.css'
})
export class ContentParentComponent {
  topic = "@ContentChild() and @ContentChildren()"
  // @ContentChild(ContentChildComponent) child: ContentChildComponent;
  // @ContentChildren(ContentChildComponent) children: QueryList<ContentChildComponent>;
 
}
