import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use the imported routes
  exports: [RouterModule]
})
export class AppRoutingModule { }