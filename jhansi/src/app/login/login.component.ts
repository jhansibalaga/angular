import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    student:Student[]=[];
    constructor(private service:StudentService){}
    ngOnInit():void{
      this.service.onsubmit().subscribe(data=>this.student=data);
    }
}
