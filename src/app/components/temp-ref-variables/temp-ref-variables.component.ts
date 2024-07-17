import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-temp-ref-variables',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './temp-ref-variables.component.html',
  styleUrl: './temp-ref-variables.component.css'
})
export class TempRefVariablesComponent {
  myMessage: string 
  getInputValue(value: any){
    this.myMessage = value
  }
}
