import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit(register:Register):Observable<any[]>{
    return this.http.post<Register[]>(this.baseurl,register);
  }
}
