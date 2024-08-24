import { Routes } from '@angular/router';
import { HomeComponent } from './justlink/home/home.component';
import { ResponseComponent } from './justlink/response/response.component';
import { HelpComponent } from './justlink/help/help.component';

export const routes:Routes = [
    { path:'justlink', component:HomeComponent},
    { path:'justlink/response', component:ResponseComponent},
    { path:'justlink/help', component:HelpComponent}
  ];
