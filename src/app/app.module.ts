import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './partials/navbar/navbar.component';
import {PageNotFoundComponent} from './partials/page-not-found/page-not-found.component';
import {FooterComponent} from './partials/footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SliderComponent} from './partials/slider/slider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './controller/services/jwt.interceptor';
import { BooksComponent } from './components/books/books.component';
import { LanguagesComponent } from './components/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    RegisterComponent,
    BooksComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// {
// provide: HTTP_INTERCEPTORS,
// useClass: JwtInterceptor,
// multi: true
// }
