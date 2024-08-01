import { Component, computed, signal, ViewEncapsulation } from '@angular/core';

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
import { lastValueFrom } from 'rxjs';
import { NgTemplateComponent } from "../ng-template/ng-template.component";
import { NgContainerComponent } from "../ng-container/ng-container.component";

interface myCounter {
  value: number
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule, AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent, CommonModule, Comp1Component, Comp2Component, PercentagePipe, SignalsComponent, NgTemplateComponent, NgContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  preserveWhitespaces: true,
  
//  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  inputValue = ['Konduru']
  check = 0
  // counter = signal<myCounter>({
  //   value: 100
  // })
  // counter = signal<number[]>([10])
  counter = signal(0)
  tenXCounter = computed(() => {
    const value = this.counter()
    return value * 10
  })
  hundredXCounter = computed(() => {
    const value = this.tenXCounter()
    return value * 10
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
    // this.counter.update(counter => ({
    //   ...counter,
    //   value: counter.value + 1
    // }))
    // this.counter.update(c => ([
    //   ...c,
    //   c[c.length - 1]+ 10
    // ]))
    this.counter.update(counter => counter + 1)
    
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
    // this.counter.update(c => ({
    //   ...c,
    //   value: c.value - 1
    // }))
    // this.counter.update(v => [
    //   ...v,
    //   v[v.length -1] - 10
    // ])
  }
  append(){
    // this.counter.update(v => [
    //   ...v,
    //   v[v.length - 1]+10
    // ])
    // const value = this.counter()
    // const last = value[value.length - 1]
    // console.log("this.counter().length: ", this.counter().length)
    // console.log("this.counter[this.counter().length - 1]: ", this.counter().at(this.counter().length-1))
    // const final = this.counter[this.counter().length - 1]
    // this.counter().push(this.counter().at(this.counter().length-1) + 1)
  }
  remove(){
    // this.counter().pop()
  }
}
