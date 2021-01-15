import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
	ApexAxisChartSeries,
	ApexChart,
	ChartComponent,
	ApexDataLabels,
	ApexPlotOptions,
	ApexYAxis,
	ApexLegend,
	ApexStroke,
	ApexXAxis,
	ApexFill,
	ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
	series: ApexAxisChartSeries;
	chart: ApexChart;
	dataLabels: ApexDataLabels;
	plotOptions: ApexPlotOptions;
	yaxis: ApexYAxis;
	xaxis: ApexXAxis;
	fill: ApexFill;
	tooltip: ApexTooltip;
	stroke: ApexStroke;
	legend: ApexLegend;
};

@Component({
	selector: 'kt-widget12-new-users',
	templateUrl: './widget12-new-users.component.html'
})
export class Widget12NewUsersComponent implements OnInit {
	@Input() cssClasses = '';
	@ViewChild('chart') chart: ChartComponent;
	public chartOptions: Partial<ChartOptions>;

	constructor() {
		this.chartOptions = {
			series: [
				{
					name: 'New Client',
					data: [ 44, 55, 57, 56, 61, 58, 63, 60, 66, 76, 43, 76 ]
				},
				{
					name: 'Retained Client',
					data: [ 76, 85, 101, 98, 87, 105, 91, 114, 94, 78, 97, 32 ]
				}
			],
			chart: {
				type: 'bar',
				height: 350
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
					endingShape: 'rounded'
				}
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 2,
				colors: [ 'transparent' ]
			},
			xaxis: {
				categories: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
			},
			yaxis: {
				title: {
					text: ' (thousands)'
				}
			},
			fill: {
				opacity: 1
			},
			tooltip: {
				y: {
					formatter: function(val) {
						return ' ' + val + ' thousands';
					}
				}
			}
		};
	}
	ngOnInit(): void {
		throw new Error('Method not implemented.');
	}
}
