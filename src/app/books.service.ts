import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) { }
  getbooks(){
    return this.http.get("http://localhost:3000/books");
  }
  newBook(book:any){
    return this.http.post("http://localhost:3000/addbook",{"book":book})
    .subscribe(data=>{console.log(data)})
  }
  getbook(id:any){
    return this.http.get("http://localhost:3000/book/"+id);
  }

  editbook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/updatebook",book)
    .subscribe(data =>{console.log(data)})
  }
  deletebook(id:any){
    return this.http.delete("http://localhost:3000/deletebook/"+id);
  }
}
