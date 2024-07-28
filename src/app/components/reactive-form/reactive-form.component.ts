import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  registerForm: any = FormGroup

    ngOnInit(): void {
      this.registerForm = new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null),
        dob: new FormControl(null),
        gender: new FormControl(null),
        Angular: new FormControl(null),
        Bootstrap: new FormControl(null),
        TailwindCSS: new FormControl(null),
        address: new FormGroup({
          address1: new FormControl(null),
          address2 : new FormControl(null),
          country: new FormControl(null),
          city: new FormControl(null),
          region: new FormControl(null),
          postalCode: new FormControl(null)
        })
        
      })
    }
    onClick(){
      const formData = this.registerForm.value
      console.log("Form Data: ", formData)
      console.log("Form Data: ", formData.dob.toDateString())
      console.log("Form Data: ", formData.dob.toGMTString())
      console.log("Form Data: ", formData.dob.toLocaleDateString())
    }
}
