import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  @ViewChildren(ChildComponent) childrenComponents !: QueryList<ChildComponent>
  @ViewChildren('address') address : QueryList<ElementRef>

  ngOnInit(){
    console.log("ngOnInit Called......")
    console.log("childProperty: ", this.childComponent.childProperty)
    console.log("ngOnInit Ends......")
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit Called......")
    // console.log("childProperty: ",this.childComponent.childProperty); // Outputs: Hello from Child!
    // this.childComponent.childMethod(); // Calls method in child component
    this.childrenComponents.forEach((child, index) => {
      console.log(`Child ${index + 1}:`, child.childProperty);
      child.childMethod();
    });
    console.log("ngAfterViewInit Ends......")
  }

  accessChild() {
    alert(this.childComponent.childProperty);
  }

  accessChildren(){
    this.childrenComponents.forEach((child, index) => {
      alert(`Child ${index + 1}: ${child.childProperty}`);
    });
  }
  getAddress(){
    this.address.forEach((addr, index) => {
      console.log(`Address: ${index +1} = ${addr.nativeElement.value}`)
    })
    // console.log("Address: ", this.address.first.nativeElement.value)
  }
}
