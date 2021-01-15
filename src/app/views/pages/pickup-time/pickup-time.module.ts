import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupTimeComponent } from './pickup-time.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ PickupTimeComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: PickupTimeComponent
			}
		])
	]
})
export class PickupTimeModule {}
