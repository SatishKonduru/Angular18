import { Component, signal, ViewEncapsulation } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ServicesComponent } from "../services/services.component";
import { ProductsComponent } from "../products/products.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { DemoComponent } from '../demo/demo.component';
import { CommonModule } from '@angular/common';
import { Comp1Component } from "../comp1/comp1.component";
import { Comp2Component } from "../comp2/comp2.component";
import { PercentagePipe } from '../../pipes/percentage.pipe';
import { SignalsComponent } from "../signals/signals.component";

interface myCounter {
  value: number
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule, AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent, CommonModule, Comp1Component, Comp2Component, PercentagePipe, SignalsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  preserveWhitespaces: true
//  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  inputValue = ['Konduru']
  check = 0
  counter = signal<myCounter>({
    value: 100
  })
  ngOnInit(){
    setInterval(()=>{this.check++},1000)
  }
  myInputValue = ''
  // constructor(){
  //   console.log("Home Constructor is called")
  // }
  onClick(value: any){
    // this.inputValue = value
    // this.inputValue.push(value)
    this.myInputValue = value
  }
  increment(){
    // this.counter++
    // this.counter.set(this.counter() + 1)
    // another way of update signal value
    // this.counter.update(counter => counter + 1)
    // this.counter.set('Konduru')
    // this.counter.update( c => c = 'konduru')
    // this.counter().value++
    // this.counter.set({
    //   value: this.counter().value + 1
    // })
    this.counter.update(counter => ({
      ...counter,
      value: counter.value + 1
    }))
  }
  decrement(){
    // this.counter--
    // this.counter.set(this.counter() -1)
    // this.counter.update(counter => counter - 1)
    // this.counter.set('RSK')
    // this.counter().value--
    // this.counter.set({
    //   value: this.counter().value - 1
    // })
    this.counter.update(c => ({
      ...c,
      value: c.value - 1
    }))
  }
}
