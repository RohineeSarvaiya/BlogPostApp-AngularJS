import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UtilService {
  
  url = "/api";

  constructor(private http : HttpClient) { }

  getAllBlog(){
    return this.http.get(this.url);
  }
 
  getBlogById(id:string){
    return this.http.get(this.url+'/'+id);
  }

  createBlog(blog : Blog) {
    return this.http.post(this.url, blog);
  }

  deleteBlog(id:string)
  {
    return this.http.delete(this.url+'/'+id);
  }

  editBlog(id:string , blog:Blog)
  {
    return this.http.put(this.url+'/'+id,blog);
  }

}


export interface Blog{
    ID?: string;
    TITLE?: string;
    AUTHOR?: string;
    ABSTRACT?: string;
    CATEGORIES?: string;
    DESCRIPTION?: string;
    CREATED_DATE?: string;
}