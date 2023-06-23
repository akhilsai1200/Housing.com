import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  properties:Array<any>=[
    {
    "Id":19,
    "Name":"One House",
    "Type":"House",
    "Price":12200
},
{
  "Id":20,
    "Name":"Two House",
    "Type":"Villa",
    "Price":82200
},
{
  "Id":21,
    "Name":"Three House",
    "Type":"Apartment",
    "Price":62200
},
{
  "Id":22,
    "Name":"Four House",
    "Type":"House",
    "Price":22200
},
{
  "Id":23,
    "Name":"Five House",
    "Type":"Apartment",
    "Price":52200
},
{
  "Id":24,
    "Name":"Six House",
    "Type":"Villa",
    "Price":92200
}
]
}
