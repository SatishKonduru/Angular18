import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TopicComponent } from "../topic/topic.component";
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [TopicComponent, CommonModule, AngularMaterialModule],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
  preserveWhitespaces:true
})
export class ViewChildComponent {
  topic = "@ViewChild() and  @ViewChildren()"
  @ViewChild('input', {static: true}) input : ElementRef;
  inputValue: any
    
  getValue(){
    this.inputValue = this.input.nativeElement.value
    console.log("Input value: ", this.inputValue)
  }

}
