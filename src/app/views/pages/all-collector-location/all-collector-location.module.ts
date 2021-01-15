import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCollectorLocationComponent } from './all-collector-location.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
@NgModule({
	declarations: [ AllCollectorLocationComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: AllCollectorLocationComponent
			}
		])
	]
})
export class AllCollectorLocationModule {}
