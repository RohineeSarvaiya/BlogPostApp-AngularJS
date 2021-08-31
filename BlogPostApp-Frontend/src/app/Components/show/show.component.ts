import { Component, OnInit } from '@angular/core';
import { UtilService , Blog} from 'src/app/Services/util.service';
import { Router , ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})


export class ShowComponent implements OnInit {

  blog : Blog={
    ID:"",
    TITLE:"",
    AUTHOR:"",
    ABSTRACT:"",
    CATEGORIES:"",
    DESCRIPTION:"",
    CREATED_DATE:""
  }

  ListBlog: Blog[] ;

  constructor(private utilservice : UtilService ,
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

  back(){
    this.router.navigate(['/home']);
  }  

  
  deleteBlog(id:string | undefined){
    var x = confirm("Are you sure, you want to delete this blog?")
    if(x)
    {
      if(id==undefined)
        id=""
      this.utilservice.deleteBlog(id).subscribe(
        res=>{
          console.log("Blog deleted");
          this.router.navigate(['/home']);
        },
        err=> console.log(err)
      );
    }
    else
    {
      var deleteButton = document.getElementById("deleteBtn")?.blur();    
    }
  }

  editBlog(id:string | undefined)
  {
    if(id==undefined)
      id=""
   
    this.router.navigate(['/edit/'+id]);
  }
   

}
