import { Component, OnInit } from '@angular/core';
import { UtilService , Blog} from 'src/app/Services/util.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  blog : Blog={
    ID:"",
    TITLE:"",
    AUTHOR:"",
    ABSTRACT:"",
    CATEGORIES:"",
    DESCRIPTION:"",
    CREATED_DATE:""
  }

  constructor(private utilservice : UtilService , private router : Router) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/home']);
  }

  createBlog(){
   
    this.utilservice.createBlog(this.blog).subscribe();
    this.router.navigate(['/home']);
  }

  onSubmit() {
    this.createBlog();
  }
 
}
