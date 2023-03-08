import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { BotonComponent } from './components/boton/boton.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { JwtInterceptorInterceptor } from './Interceptors/jwt-interceptor.interceptor';
import { FormNewContactComponent } from './components/form-new-contact/form-new-contact.component';
import { FormModifyContactComponent } from './components/form-modify-contact/form-modify-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    ListaContactosComponent,
    BotonComponent,
    LoginComponent,
    HomeComponent,
    FormNewContactComponent,
    FormModifyContactComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
