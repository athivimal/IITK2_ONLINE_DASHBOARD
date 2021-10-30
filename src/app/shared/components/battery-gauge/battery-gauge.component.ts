import { string } from '@amcharts/amcharts4/core';
import { Component, OnInit, Input, OnChanges, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-battery-gauge',
  templateUrl: './battery-gauge.component.html',
  styleUrls: ['./battery-gauge.component.scss']
})
export class BatteryGaugeComponent implements OnInit { 

  @Input() value: any;
  @Input() name: any;
  color : string;
  constructor() { }

  ngOnInit(): void {
  }
}
  

