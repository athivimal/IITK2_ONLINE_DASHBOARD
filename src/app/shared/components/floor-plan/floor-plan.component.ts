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
    if(Math.floor(value) > 26) {
      return '#ff004f';
    }
    else if(Math.floor(value) >= 19 && Math.floor(value) < 21) {
      return '#0083fd';
    }
    else if(Math.floor(value) >= 21 && Math.floor(value) < 23) {
      return '#00840A';
    }
    else if(Math.floor(value) >= 23 && Math.floor(value) < 25) {
      return '#ffff34';
    }
    else if(Math.floor(value) >= 25 && Math.floor(value) <= 26) {
      return '#ffa500';
    }
    else {
      return '#ffc0cb';
    }
  }

}
