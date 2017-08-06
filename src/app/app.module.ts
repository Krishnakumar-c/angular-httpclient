import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// New HttpClientModule
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {PostInterceptor} from './post.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Do not forget importing!
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: PostInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
