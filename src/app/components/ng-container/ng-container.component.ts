import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  check: boolean = false
  toggle(){
    this.check = !this.check
  }
}
