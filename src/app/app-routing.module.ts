import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'chat' },
{ path: 'home', component: HomeComponent },
{ path: 'chat', component: DemoComponent  },
{ path: 'bot', component: CustomerSupportComponent  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  HeaderComponent,
  HomeComponent  ,
  DemoComponent,
  HeaderComponent
]
