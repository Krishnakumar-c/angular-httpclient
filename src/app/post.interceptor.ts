import { Injectable } from '@angular/core';

import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class PostInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const postReq = req.clone({
      // Modify what you want
      headers: req.headers.set('Authorization', '123') // e.g. some auth key for access
    });
    return next.handle(postReq).do(event => {
      if (event instanceof HttpResponse) {
        const time = new Date().toLocaleString('en-US');
        console.log(`Request happened at ${time}.`); // Logging in console when request happened
      }
    })
  }
}
