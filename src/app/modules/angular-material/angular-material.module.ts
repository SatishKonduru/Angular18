import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



const materialComponents = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
]
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AngularMaterialModule { }
