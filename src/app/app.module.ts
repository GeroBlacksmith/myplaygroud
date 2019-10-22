import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CanLoadImpl } from './services/can-load-impl'
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MainComponent } from './main/main.component';
import { GuardLoadService } from './services/guard-load.service';
import { LinkHoverDirective } from './directives/link-hover.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {
        path:"prueba",
        component:PruebaComponent,
        canLoad:[CanLoadImpl]
      },{
        path:'',
        component:MainComponent
      },
      {
        path:'pie',loadChildren:'./pie/pie.module#PieModule'
      },
      {
        path:'cara',loadChildren:'./cara/cara.module#CaraModule'
      },
      {
        path:'mano',loadChildren:'./mano/mano.module#ManoModule',
        canLoad:[GuardLoadService]
      }
    ])
  ],
  providers:[ GuardLoadService ],
  declarations: [ AppComponent,PruebaComponent,MainComponent, LinkHoverDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
