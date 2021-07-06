import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:string='Add Book';
  book={
    title: '',
    author: '',
    genre:'',
    about: '',
    image: ''
  }
  constructor(private http:BooksService,private router:Router) { }

  ngOnInit(): void {
  }
 AddBook(){
   this.http.newBook(this.book);
   console.log("called");
   alert("sucess");
    this.router.navigate(["books"]);
 }

}
