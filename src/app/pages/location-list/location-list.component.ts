import { Component, OnInit } from '@angular/core';
import { sdn_data } from '../../shared/data/sdn';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  checkpoints = sdn_data;

  constructor() {
    console.log('sdn data: ', sdn_data);
  }

  ngOnInit(): void {
  }

}
