import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
@Input() message : string[] ;
@ContentChild('para') paragraph : ElementRef
@ViewChild('childPara') childPara : ElementRef
childInput: any
// @ViewChild('myMessage') myMessage: ElementRef
// constructor(){
//   console.log("Demo Constructor called....")
//   console.log("message value in demo constructor: ", this.message)
// }
ngOnChanges(changes: SimpleChanges): void {
  // console.log("demo's ngOnChanges called....")
  // console.log("message value in demo's ngOnChanges : ", this.message)
  // console.log("Changes: ", changes)
}
ngOnInit(): void {
  // console.log("demo's OnInit Called....")
  // console.log("message value in demo's OnInint: ", this.message)
  // console.log("myMessage value in demo's ngOnInit : ", this.myMessage.nativeElement.innerHTML)
 
}
ngDoCheck(): void {
  // console.log("Demo's ngDoCheck called..... ")
  // console.log("In Demo's DoCheck , the value of paragraph: ", this.paragraph)
}

ngAfterContentInit(): void {
  // console.log("Demo's ngAfterContentViewInit() Called...")
  // console.log("In Demo's ngAfterContentInit , the value of paragraph: ", this.paragraph.nativeElement)
}
ngAfterContentChecked(): void {
  // console.log("Demo's ngAfterContentChecked() Called...")
}
ngAfterViewInit(): void {
  console.log("Demo's ngAfterViewInit() Called...")
  // console.log("Demo's ngAfterViewInit() Called...ChildPara: ", this.childPara)
}
ngAfterViewChecked(): void {
  console.log("Demo's ngAfterViewChecked() Called...")
}
ngOnDestroy(): void {
  console.log("Demo's ngOnDestroy() Called...")
}

}
