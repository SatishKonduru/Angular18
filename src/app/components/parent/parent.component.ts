import { Component, ViewChild } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [TopicComponent, ChildComponent, CommonModule, AngularMaterialModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  topic = "@ViewChild() and @ViewChildren"
  @ViewChild(ChildComponent) childComponent !: ChildComponent;

  ngOnInit(){
    console.log("ngOnInit Called......")
    console.log("childProperty: ", this.childComponent.childProperty)
    console.log("ngOnInit Ends......")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called......")
    console.log("childProperty: ",this.childComponent.childProperty); // Outputs: Hello from Child!
    this.childComponent.childMethod(); // Calls method in child component
    console.log("ngAfterViewInit Ends......")
  }

  accessChild() {
    alert(this.childComponent.childProperty);
  }
}
