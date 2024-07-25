import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, AngularMaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm : any = FormGroup
  formBuilder = inject(FormBuilder)
  router = inject(Router)
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  login(){
    const formData = this.loginForm.value
    console.log("Form Data: ", formData)
    if(formData.username === 'Satish'){
      this.router.navigate(['/userDashboard'])
    }
    if(formData.username === 'admin'){
      this.router.navigate(['/adminDashboard'])
    }
  }





}
