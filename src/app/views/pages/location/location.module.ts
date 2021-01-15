import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
@NgModule({
	declarations: [ LocationComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: LocationComponent
			}
		])
	]
})
export class LocationModule {}
