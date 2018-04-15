import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuardService} from './auth-guard.service';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {FirstloadComponent} from './firstload/firstload.component';
import {PerformanceComponent} from './performance/performance.component';

const route : Routes = [
  {
    path : '',
    component : HomeComponent,
    canActivate : [AuthGuardService],
    children : [
      {
        path : "dashboard",
        component : FirstloadComponent,
        children : [
          {
            path : "show",
            component : DashboardComponent
          },
          {
            path : "performance",
            component : PerformanceComponent
          },
          {
            path : "",
            component : PerformanceComponent
          }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(route),
  ]
})

export class AppRouting {};
