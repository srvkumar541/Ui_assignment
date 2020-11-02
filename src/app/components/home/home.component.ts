import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  file: File = null; // Variable to store file
  fileName = ''
  dataList = [];
  loader: boolean = true;
  message: string;

  constructor( private router: Router,
              private userService:UserService) { }

  ngOnInit(): void {
    this.getData();
  }
  
 
   // On file Select 
   onChange(event) { 
    this.file = event.target.files[0]; 
    this.fileName = this.file.name;
    // Create form data 
    const formData = new FormData();  
        
    // Store form name as "file" with file data 
    formData.append("file", this.file, this.file.name); 
    console.log(this.file.name);
} 

getData(){
  this.userService.getData().subscribe(data =>{
    this.dataList = data;
    console.log(this.dataList)
  },
  error => console.log(error)
  )
}

}
