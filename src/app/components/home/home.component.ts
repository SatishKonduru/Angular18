import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { AboutusComponent } from "../aboutus/aboutus.component";
import { ServicesComponent } from "../services/services.component";
import { ProductsComponent } from "../products/products.component";
import { CareersComponent } from "../careers/careers.component";
import { ContactusComponent } from "../contactus/contactus.component";
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule, AboutusComponent, ServicesComponent, ProductsComponent, CareersComponent, ContactusComponent, DemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  inputValue: any
  constructor(){
    console.log("Home Constructor is called")
  }
  onClick(value: any){
    this.inputValue = value
  }
}