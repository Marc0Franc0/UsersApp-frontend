import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const jwt = this.jwtService.getToken();

    if(jwt){
      const cloned = request.clone({
        headers:request.headers.set('Authorization',`Bearer ${jwt}`)
      })
      return next.handle(cloned);
    }else{
          return next.handle(request);
    }


  }
}
