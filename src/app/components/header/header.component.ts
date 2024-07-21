import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  preserveWhitespaces: true,
})
export class HeaderComponent {

}
