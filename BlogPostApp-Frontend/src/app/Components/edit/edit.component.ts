import { Component, OnInit } from '@angular/core';
import { UtilService , Blog} from 'src/app/Services/util.service';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  blog : Blog = {
    ID:"",
    TITLE:"",
    AUTHOR:"",
    ABSTRACT:"",
    CATEGORIES:"",
    DESCRIPTION:"",
    CREATED_DATE:""
}

  ListBlog: Blog[] ;

  constructor ( private utilservice : UtilService , 
              private router : Router,
              private activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
    const blog_id = <string>this.activeRouter.snapshot.params.id;
    
    if(blog_id)
    {
      this.utilservice.getBlogById(blog_id).subscribe(
        res=> {
          this.ListBlog =<any> res;
          this.blog = this.ListBlog[0];
        },
        err=> console.log(err)
      );
    }
    
  }

  cancel(){
    this.router.navigate(['/home']);
  }

  
  editBlog(){
    if(this.blog.ID && this.blog)
    {
      this.utilservice.editBlog(this.blog.ID , this.blog).subscribe(
        res=>{
          console.log("Blog updated");
        },
        err =>console.log(err)
      );
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    this.editBlog();
  }

}
