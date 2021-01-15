import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
@NgModule({
	declarations: [ BookingComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: BookingComponent
			}
		])
	]
})
export class BookingModule {}
