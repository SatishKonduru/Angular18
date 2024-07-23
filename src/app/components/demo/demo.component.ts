import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnChanges, OnInit{
@Input() message : string[] ;
// @ViewChild('myMessage') myMessage: ElementRef
// constructor(){
//   console.log("Demo Constructor called....")
//   console.log("message value in demo constructor: ", this.message)
// }
ngOnChanges(changes: SimpleChanges): void {
  console.log("demo's ngOnChanges called....")
  console.log("message value in demo's ngOnChanges : ", this.message)
  console.log("Changes: ", changes)
}
ngOnInit(): void {
  console.log("demo's OnInit Called....")
  console.log("message value in demo's OnInint: ", this.message)
  // console.log("myMessage value in demo's ngOnInit : ", this.myMessage.nativeElement.innerHTML)
 
}


}
