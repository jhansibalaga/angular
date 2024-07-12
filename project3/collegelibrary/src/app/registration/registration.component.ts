import { Component } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
 student:Register=new Register();
 loginform!:FormGroup;
 constructor(private service:RegisterService ,private form:FormBuilder){
  this.loginform=this.form.group({
    Name:['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.maxLength(10),Validators.minLength(8),Validators.pattern(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g)]],
  });
 }
 ngOnInit():void{}
 submit():void{
  this.service.onsubmit(this.student).subscribe(
    response =>{
      console.log("successfully registered",response);
      Swal.fire("successfully Inserted!",'success' ,'success');
    },
    error =>{
      console.log("registration failed", error);
      Swal.fire("registration failed",'error','error');
    }
  )
 }
}
