// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { AuthGuard } from './core/auth';

const routes: Routes = [
	{ path: 'auth', loadChildren: () => import('./views/pages/auth/auth.module').then((m) => m.AuthModule) },
	{
		path: 'error',
		loadChildren: () => import('./views/pages/error/error.module').then((m) => m.ErrorModule)
	},
	{
		path: '',
		component: BaseComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('./views/pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
			},
			{
				path: 'appuser',
				loadChildren: () =>
					import('./views/pages/app-user-management/app-user-management.module').then(
						(m) => m.AppUserManagementModule
					)
			},
			{
				path: 'scrap',
				loadChildren: () =>
					import('./views/pages/scrap-management/scrap-management.module').then(
						(m) => m.ScrapManagementModule
					)
			},
			{
				path: 'collectorlocation',
				loadChildren: () =>
					import('./views/pages/all-collector-location/all-collector-location.module').then(
						(m) => m.AllCollectorLocationModule
					)
			},
			{
				path: 'location',
				loadChildren: () => import('./views/pages/location/location.module').then((m) => m.LocationModule)
			},
			{
				path: 'pickup',
				loadChildren: () =>
					import('./views/pages/pickup-time/pickup-time.module').then((m) => m.PickupTimeModule)
			},
			{
				path: 'collectorinformation',
				loadChildren: () =>
					import('./views/pages/collector-information/collector-information.module').then(
						(m) => m.CollectorInformationModule
					)
			},
			{
				path: 'booking',
				loadChildren: () => import('./views/pages/booking/booking.module').then((m) => m.BookingModule)
			},
			{
				path: 'financial',
				loadChildren: () => import('./views/pages/financial/financial.module').then((m) => m.FinancialModule)
			},
			{
				path: 'notification',
				loadChildren: () =>
					import('./views/pages/notification/notification.module').then((m) => m.NotificationModule)
			},
			{
				path: 'mail',
				loadChildren: () => import('./views/pages/apps/mail/mail.module').then((m) => m.MailModule)
			},
			{
				path: 'ecommerce',
				loadChildren: () =>
					import('./views/pages/apps/e-commerce/e-commerce.module').then((m) => m.ECommerceModule)
			},
			{
				path: 'ngbootstrap',
				loadChildren: () =>
					import('./views/pages/ngbootstrap/ngbootstrap.module').then((m) => m.NgbootstrapModule)
			},
			{
				path: 'material',
				loadChildren: () => import('./views/pages/material/material.module').then((m) => m.MaterialModule)
			},
			{
				path: 'user-management',
				loadChildren: () =>
					import('./views/pages/user-management/user-management.module').then((m) => m.UserManagementModule)
			},
			{
				path: 'wizard',
				loadChildren: () => import('./views/pages/wizard/wizard.module').then((m) => m.WizardModule)
			},
			{
				path: 'builder',
				loadChildren: () => import('./views/theme/content/builder/builder.module').then((m) => m.BuilderModule)
			},
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{ path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
		]
	},
	{ path: '**', redirectTo: 'error/403', pathMatch: 'full' }
];

@NgModule({
	imports: [ CommonModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
