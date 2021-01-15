import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ NotificationComponent ],
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: NotificationComponent
			}
		])
	]
})
export class NotificationModule {}
