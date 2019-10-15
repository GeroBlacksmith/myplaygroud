import { NgModule } from '@angular/core';
import {CommonModule}from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ManoComponent } from './mano.component';
@NgModule({
  imports:      [ 
    FormsModule,
    CommonModule,
    RouterModule.forChild([
     {path:'',component:ManoComponent}
    ])
  ],
  declarations: [ ManoComponent ],
  exports:[RouterModule, ManoComponent]
})
export class ManoModule { }
