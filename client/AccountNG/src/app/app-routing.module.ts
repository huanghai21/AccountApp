import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MyEchartsComponent, OrderFormComponent } from './basic';

const route = [
	{path: 'order', component: OrderFormComponent},
	{path: 'chart', component: MyEchartsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
