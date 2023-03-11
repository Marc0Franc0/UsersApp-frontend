import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing.module';
import { JwtInterceptorInterceptor } from './Interceptors/jwt-interceptor.interceptor';
import { ListaUsersComponent } from './components/lista-users/lista-users.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { FormModifyUserComponent } from './components/form-modify-user/form-modify-user.component';


@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    LoginComponent,
HomeComponent,
ListaUsersComponent,
FormNewUserComponent,
FormModifyUserComponent

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
