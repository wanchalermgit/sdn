import { Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-sdn-home',
  templateUrl: './sdn-home.component.html',
  styleUrls: ['./sdn-home.component.css']
})
export class SdnHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const myLatlng = new google.maps.LatLng(16.762162, 100.215040);
    const mapOptions = {
      zoom: 17,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    const Marker = new google.maps.Marker({
      position: myLatlng,
      title: 'ด่านแถวบ้าน'
    });
    // To add the marker to the map, call setMap();
    Marker.setMap(map);
  }

}
