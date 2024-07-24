import { Component, ViewEncapsulation } from '@angular/core';

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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule, AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent, CommonModule, Comp1Component, Comp2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
//  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent {
  inputValue = ['Konduru']
  check = 0
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
}
