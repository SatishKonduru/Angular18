import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { EmailValidator, FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  registerForm: any = FormGroup
  cdRef = inject(ChangeDetectorRef)

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
        }),
        skills: new FormArray([]),
        experience: new FormArray([
          new  FormGroup({
            company_name: new FormControl(null),
            location: new FormControl(null)
          })
        ])
        
      })
    }
    onClick(){
      const formData = this.registerForm.value
      console.log("Form Data: ", formData)
      console.log("this.registerForm: ", this.registerForm)
      console.log("Skills Form Data: ", formData.skills)
  
    } 
    addSkill(){
      (<FormArray>this.registerForm.controls.skills).push(new FormControl(null))
      const formData = this.registerForm.value
      console.log("Skills Form Data: ", formData.skills)
    }
    deleteSkill(index: any){
      const control = (<FormArray>this.registerForm.controls.skills)
      control.removeAt(index)
    }
    addExprience(){
      (<FormArray>this.registerForm.controls.experience).push(new FormGroup({
        company_name: new FormControl(null),
        location: new FormControl(null)
    }))
    this.cdRef.detectChanges(); 
    const formData = this.registerForm.value
    console.log("Form Data:", formData)
    }
    deleteExperence(index: any){
      const control = <FormArray>this.registerForm.controls.experience
      control.removeAt(index)
    }
}
