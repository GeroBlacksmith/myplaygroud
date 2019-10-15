import { NgModule } from '@angular/core';
import {CommonModule}from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CaraComponent } from './cara.component';
@NgModule({
  imports:      [ 
    FormsModule,
    CommonModule,
    RouterModule.forChild([
     {path:'',component:CaraComponent}
    ])
  ],
  declarations: [ CaraComponent ],
  exports:[CaraComponent, RouterModule]
})
export class CaraModule { }
