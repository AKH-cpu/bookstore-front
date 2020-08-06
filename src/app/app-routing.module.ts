import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './partials/page-not-found/page-not-found.component';
import {AuthFormsComponent} from './components/auth-forms/auth-forms.component';
import {LoginComponent} from './components/login/login.component';
import {AppComponent} from './app.component';
import {BooksComponent} from './components/books/books.component';
import {RegisterComponent} from './components/register/register.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: BooksComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

