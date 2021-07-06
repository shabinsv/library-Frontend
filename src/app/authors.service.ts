import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(public http:HttpClient) { }

  getauthors(){
    return this.http.get("http://localhost:3000/authors");
  }
  newAuthor(author:any){
    return this.http.post("http://localhost:3000/addauthor",{"author":author})
    .subscribe(data=>{console.log(data)})
  }
  getauthor(id:any){
    return this.http.get("http://localhost:3000/author/"+id);
  }

  editauthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updateauthor",author)
    .subscribe(data =>{console.log(data)})
  }
  deleteauthor(id:any){
    return this.http.delete("http://localhost:3000/deleteauthor/"+id);
  }
}
