import {Component}from "@angular/core";
@Component({
  selector:"app-prueba",
  templateUrl:'./prueba.component.html',
  styleUrls:['./prueba.component.css']
})
export class PruebaComponent{
  carddata = [
    {title:"title1",body:"body1"},
    {title:"title2",body:"body2"},
    {title:"title3",body:"body3"},
    {title:"title4",body:"body4"},

  ]
}