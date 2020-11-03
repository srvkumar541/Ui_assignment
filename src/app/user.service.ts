import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:boolean = false;
  
  constructor(private http:HttpClient) { }

  registerUser(userData): Observable<any>{
    console.log(userData);
    let url ='http://localhost:8000/api/register/'
    return this.http.post(url,userData)
  }
  loginUser(loginData):Observable<any>{
    let url ='http://localhost:8000/api/login/'
    return this.http.post(url,loginData)
  }
  fileUpload(formData):Observable<any>{
    let url = 'http://localhost:8000/api/fileUpload/'
    return this.http.post(url,formData)
  }
  getData():Observable<any>{
    let url ='../../assets/data.json';
    return this.http.get(url)
  }
}
