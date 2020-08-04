import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

 /* intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.getToken()}`
      }
    });

    return next.handle(request);
  }
  */
 intercept(req: HttpRequest<any>, next: HttpHandler) {
  const xhr = req.clone({
    headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
  });
  return next.handle(xhr);
}
}
