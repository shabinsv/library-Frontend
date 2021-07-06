import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksService } from './books.service';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorComponent } from './author/author.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AuthorsService } from './authors.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BooksComponent,
    AddbookComponent,
    UpdatebookComponent,
    BookComponent,
    AuthorsComponent,
    AddauthorComponent,
    AuthorComponent,
    UpdateauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService,AuthService,BooksService,AuthorsService,
    {
      provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
