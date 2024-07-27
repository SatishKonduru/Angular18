import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CommonModule, NgFor } from '@angular/common';
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

  formData: NgForm
  onSubmit(form: NgForm){
    // form.controls['firstName'].setValue('Satish')
    // form.controls.address.setValue({
    //   address1: 'NDL',
    //   address2: 'HUP'
    // })
    form.controls.address.patchValue({
      address1: 'NDL'
    })
    this.formData = form.value
    console.log(this.formData)
    // console.log("form:", form)
    // console.log("Address 1:", form.controls.address.value.address1)
  }
 
}
