import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-angular-gauge',
  templateUrl: './angular-gauge.component.html',
  styleUrls: ['./angular-gauge.component.scss']
})
export class AngularGaugeComponent implements OnInit, AfterViewInit {

  @Input() name: any;
  @Input() value: any;

  constructor() { }

  ngOnInit(): void {   
  }
  ngAfterViewInit(): void {
    /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// create chart
let chart = am4core.create(`chartdiv${this.name}`, am4charts.GaugeChart); //appending name to chartdiv
chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

chart.innerRadius = -25;

let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
axis.min = 0;
axis.max = 100;
axis.strictMinMax = true;
axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
axis.renderer.grid.template.strokeOpacity = 0.3;

let colorSet = new am4core.ColorSet();

let range0 = axis.axisRanges.create();
range0.value = 0;
range0.endValue = 50;
range0.axisFill.fillOpacity = 1;
range0.axisFill.fill = colorSet.getIndex(0);
range0.axisFill.zIndex = - 1;

let range1 = axis.axisRanges.create();
range1.value = 50;
range1.endValue = 80;
range1.axisFill.fillOpacity = 1;
range1.axisFill.fill = colorSet.getIndex(2);
range1.axisFill.zIndex = -1;

let range2 = axis.axisRanges.create();
range2.value = 80;
range2.endValue = 100;
range2.axisFill.fillOpacity = 1;
range2.axisFill.fill = colorSet.getIndex(4);
range2.axisFill.zIndex = -1;

let hand = chart.hands.push(new am4charts.ClockHand());
//let hand = chart.hands.push(new am4charts.ClockHand());
hand.value = this.value;
// hand.pin.disabled = true;
// hand.fill = am4core.color("black");
// hand.stroke = am4core.color("black");
// // hand.innerRadius = am4core.percent(50);
// hand.radius = am4core.percent(90);
// hand.startWidth = 5;

/*// using chart.setTimeout method as the timeout will be disposed together with a chart
chart.setTimeout(randomValue, 2000);

function randomValue() {
    hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
    chart.setTimeout(randomValue, 2000);
}*/
  }
 



}