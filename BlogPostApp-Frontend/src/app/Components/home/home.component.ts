import { Component, OnInit } from '@angular/core';
import { UtilService , Blog } from 'src/app/Services/util.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  ListBlog: Blog[] ;
  constructor(private utilservice : UtilService, private router : Router) { }

  ngOnInit(): void {
    this.listAllBlog();
  }

  listAllBlog(){
    this.utilservice.getAllBlog().subscribe(
      res=>{
        console.log(res)
        this.ListBlog=<any>res;
      },
      err=> console.log(err)
    );
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
          this.listAllBlog();
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

  showBlog(id:string | undefined)
  {
    if(id==undefined)
      id=""
    this.router.navigate(['/show/'+id]);  
  }
  
}
