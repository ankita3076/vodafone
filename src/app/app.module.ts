import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { PhonesComponent } from './pages/phones/phones.component';
import { MzSpinnerModule, MzNavbarModule } from 'ngx-materialize'
import { MzModalModule } from 'ngx-materialize'
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { ErrorHandlingInterceptor } from './interceptors/error.handling.interceptor';
import { NgxErrorsModule } from '@hackages/ngxerrors';
import { MasterComponent } from './pages/master/master.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PhoneService } from './services/phone.service';
import { PhonesModule } from './pages/phones/phone.module'

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    }),
    MzSpinnerModule,
    MzModalModule,
    NgxErrorsModule,
    MzNavbarModule,
    InfiniteScrollModule,
    PhonesModule
  ],
  providers: [
    LoginService,
    PhoneService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
