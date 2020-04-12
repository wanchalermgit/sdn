import {Component, OnInit } from '@angular/core';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}

@Component({
    selector: 'app-fullscreen-map-cmp',
    templateUrl: 'fullscreenmap.component.html'
})

export class FullScreenMapsComponent implements OnInit {
    ngOnInit() {
        const myLatlng = new google.maps.LatLng(16.763050, 100.215180);
        const mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        };
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
        const Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'ด่านแถวบ้านผม'
        });
    // To add the marker to the map, call setMap();
    Marker.setMap(map);
    }
}
