import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrapManagementComponent } from './scrap-management.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
@NgModule({
	declarations: [ ScrapManagementComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ScrapManagementComponent
			}
		])
	]
})
export class ScrapManagementModule {}
