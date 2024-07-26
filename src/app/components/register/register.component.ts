import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, FormsModule, MatCalendar],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formData: any
  onSubmit(form: NgForm){
    this.formData = form.value
    console.log(form.controls.firstName.value)
  }
}
