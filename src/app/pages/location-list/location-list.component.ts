import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { sdn_data } from '../../shared/data/sdn';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  @Output() selectedCheckpoint = new EventEmitter<any>();

  checkpoints = sdn_data;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectLocation(checkpoint) {
    this.selectedCheckpoint.emit(checkpoint);
  }

}
