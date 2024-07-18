import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  preserveWhitespaces: true
})
export class SwitchComponent {
  color = 'black'
}
