import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdn-full-map',
  templateUrl: './sdn-full-map.component.html',
  styleUrls: ['./sdn-full-map.component.css']
})
export class SdnFullMapComponent implements OnInit {

  currentLocation: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectedLocation(locationData){
    console.log('this is log from stn full map component', locationData);
    this.currentLocation = locationData;
  }

}
