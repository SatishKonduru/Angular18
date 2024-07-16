import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

}
