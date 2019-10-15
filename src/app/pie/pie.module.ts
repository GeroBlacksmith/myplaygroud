import { NgModule } from '@angular/core';
import {CommonModule}from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { PieComponent} from './pie.component';

@NgModule({
  imports:      [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
     {path:'',component:PieComponent}
    ])
  ],
  declarations: [ PieComponent ],
  exports:[RouterModule,PieComponent]
})
export class PieModule { }
