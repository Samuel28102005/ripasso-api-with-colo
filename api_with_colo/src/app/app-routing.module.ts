import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PattyComponent } from './patty/patty.component';

const routes: Routes = [
  {path:'patty/:path',component:PattyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
