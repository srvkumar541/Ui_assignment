import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  server_path=  'http://127.0.0.1:8000'
  file: File = null; // Variable to store file
  fileName = ''
  dataList = [];
  loader: boolean = false;
  message: string;
  imageURL: string;
  fileContent;

  constructor( private router: Router,
              private userService:UserService) { }

  ngOnInit(): void {
    //this.getData();
  }
  
 
   // On file Select 
   onChange(event) { 
    this.file = event.target.files[0]; 
    this.fileName = this.file.name;
    // Create form data 
    const formData = new FormData();  
        
    // Store form name as "file" with file data 
    formData.append("file", this.file, this.file.name); 
    this.userService.fileUpload(formData)
      .subscribe(data =>{
        this.imageURL = `${this.server_path}${data.file}`;
        console.log(this.imageURL);
        this.loader = true;
      },
      error =>{
        console.log(error)
      })
} 

// getData(){
//   this.userService.getData().subscribe(data =>{
//     this.dataList = data;
//     console.log(this.dataList)
//   },
//   error => console.log(error)
//   )
// }


  public getData(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = JSON.parse(fileReader.result);
    }
    fileReader.readAsText(file);
  }

}
