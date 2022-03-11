import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLog } from 'src/app/models/user-log';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  User!: UserLog;
  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  login(): void {

  }
  createForm(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]],
      password:['',[Validators.required]],
    })
  }
  get emailValidate(){
    return(
      this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched
    );
  }
  get passwordValidate(){
    return(
      this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched
    ); 
  }

  setUser():void{
    this.User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
}
