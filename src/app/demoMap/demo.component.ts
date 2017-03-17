import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-demo',
  template:`
<div ><h1>{{ title }}</h1>
      <h6>{{titleM}}</h6>
  <!-- this creates a google map on the page with the given lat/lng from -->
  <!-- the component as the initial center of the map: -->
<sebm-google-map [latitude]="lat" [longitude]="lng">
<sebm-google-map-marker [latitude]="lat" [longitude]="lng">
  </sebm-google-map-marker>
  </sebm-google-map>
</div>
<div ><h1>{{ title2 }}</h1>
<sebm-google-map [latitude]="lat2" [longitude]="lng2">
<sebm-google-map-marker [latitude]="lat2" [longitude]="lng2">
  </sebm-google-map-marker>
  </sebm-google-map>
</div>
<div ><h1>{{ title3 }}</h1>
<sebm-google-map [latitude]="lat3" [longitude]="lng3">
<sebm-google-map-marker [latitude]="lat3" [longitude]="lng3">
  </sebm-google-map-marker>
  </sebm-google-map>
</div>
`

})
export class DemoComponent {

  title: string = 'My first Angular 2 Google-maps Project';
  titleM: string = 'Click bottom left google for sattelite view'
  lat: number = 19.442466;
  lng: number = -155.232871;

  title2: string = 'Statue Of Liberty';
  lat2: number = 	40.6892746;
  lng2: number = -74.04455589999998;

  title3: string = 'Mount Everest';
  lat3: number = 	27.98785;
  lng3: number = 86.925026;
}
