import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [{path:'',component:BooksComponent},
{path:'login',component:LoginComponent},
{path:'books',component:BooksComponent},
{path:'addbook',canActivate:[AuthGuard],component:AddbookComponent},
{path:'updatebook',canActivate:[AuthGuard],component:UpdatebookComponent},
{path:'book',component:BookComponent},
{path:'authors',component:AuthorsComponent},
{path:'addauthor',canActivate:[AuthGuard],component:AddauthorComponent},
{path:'updateauthor',canActivate:[AuthGuard],component:UpdateauthorComponent},
{path:'author',component:AuthorComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
