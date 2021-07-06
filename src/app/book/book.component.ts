import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title:string='Book';
  book:any={
    title: '',
    author: '',
    genre:'',
    about: '',
    image: ''
  }

  constructor(public http:BooksService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("singlebookId");
    this.http.getbook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
