import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {
  @Input() floorValues: any;
  @Input() img: any;

  constructor() { }
  

  ngOnInit(): void {
    console.log(this.img,"image")
  }

  getColor(value) {
    if(Math.floor(value) > 30) {
      return '#ff0000';
    }
    else if(Math.floor(value) >= 19 && Math.floor(value) < 21) {
      return '#00008f';
    }
    else if(Math.floor(value) >= 21 && Math.floor(value) < 23) {
      return '#0000bb';
    }
    else if(Math.floor(value) >= 23 && Math.floor(value) < 25) {
      return '#0000ea';
    }
    else if(Math.floor(value) >= 25 && Math.floor(value) < 26) {
      return '#00ffff';
    }
    else if(Math.floor(value) >= 26 && Math.floor(value) < 28) {
      return '#007800';
    }
    else if(Math.floor(value) >= 28 && Math.floor(value) <= 30) {
      return '#fa7800';
    }
    else {
      return '#00ff00';
    }
  }

}
