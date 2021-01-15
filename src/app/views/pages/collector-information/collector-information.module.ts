import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorInformationComponent } from './collector-information.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ CollectorInformationComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CollectorInformationComponent
			}
		])
	]
})
export class CollectorInformationModule {}
