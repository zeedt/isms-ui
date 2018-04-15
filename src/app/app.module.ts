import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {GlobalService} from './global.service'
import {AppRouting} from './routing-module'
import {AuthGuardService} from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { FirstloadComponent } from './firstload/firstload.component';
import { PerformanceComponent } from './performance/performance.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/loginservices/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FirstloadComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRouting,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : 'login',
        component : LoginComponent
      },
      { path: 'app', loadChildren: './routing-module#AppRouting' },

    ],{useHash : true})
  ],
  providers: [GlobalService,AuthGuardService,LoginService,{
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  }],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
