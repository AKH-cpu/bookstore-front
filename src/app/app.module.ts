import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/partials/navbar/navbar.component';
import {PageNotFoundComponent} from './components/partials/page-not-found/page-not-found.component';
import {FooterComponent} from './components/partials/footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {SliderComponent} from './components/partials/slider/slider.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthFormsComponent} from './components/auth-forms/auth-forms.component';
import {RegisterComponent} from './components/auth-forms/register/register.component';
import {LoginComponent} from './components/auth-forms/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './services/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
    AuthFormsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
