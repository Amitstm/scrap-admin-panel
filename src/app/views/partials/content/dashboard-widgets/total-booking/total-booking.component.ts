import { Component, Input, OnInit } from '@angular/core';
import { LayoutConfigService } from 'src/app/core/_base/layout/services/layout-config.service';

@Component({
	selector: 'kt-total-booking',
	templateUrl: './total-booking.component.html',
	styleUrls: [ './total-booking.component.scss' ]
})
export class TotalBookingComponent implements OnInit {
	@Input() cssClasses = '';

	constructor() {}
	ngOnInit(): void {}
}
