import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'kt-pending-booking',
	templateUrl: './pending-booking.component.html',
	styleUrls: [ './pending-booking.component.scss' ]
})
export class PendingBookingComponent implements OnInit {
	@Input() cssClasses = '';
	constructor() {}

	ngOnInit(): void {}
}
