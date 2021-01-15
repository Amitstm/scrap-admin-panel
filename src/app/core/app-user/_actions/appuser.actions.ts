//NGRX
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
//Crud
import { QueryParamsModel } from '../../_base/crud';

//Models
import { AppuserModel } from '../_models/appuser.model';

export enum AppuserActionTypes {
	AppuserOnServerCreated = '[Edit Appuser Dialog] Customer On Server created',
	AppuserCreated = '[Edit Appuser Dialog] Appuser created',
	AppuserUpdated = '[Edit Appuser Dialog] Appuser updated',
	AppusersStatusUpdated = '[Appuser List Page] Appusers Status Updated',
	OneAppuserDeleted = '[Appuser List Page] One Appuser Deleted',
	ManyAppusersDeleted = '[Appuser List Page] Many App user Delete',
	AppusersPageRequested = '[Appusers List Page] Appusers Page Requested',
	AppusersPageLoaded = '[Appusers Api] Appusers Page Loaded',
	AppusersPageCancelled = '[Appusers Api] Appusers Page Cancelled',
	AppusersPageToggleLoading = '[Appusers] Appusers Page Toggle Loading',
	AppuserActionToggleLoading = '[Appusers] Appusers Action Toggle Loading'
}

export class AppuserOnServerCreated implements Action {
	readonly type = AppuserActionTypes.AppuserOnServerCreated;
	constructor(public payload: { appuser: AppuserModel }) {}
}

export class AppuserCreated implements Action {
	readonly type = AppuserActionTypes.AppuserCreated;
	constructor(public payload: { appuser: AppuserModel }) {}
}

export class AppuserUpdated implements Action {
	readonly type = AppuserActionTypes.AppuserUpdated;
	constructor(
		public payload: {
			partialAppuser: Update<AppuserModel>;
			appuser: AppuserModel;
		}
	) {}
}
export class AppusersStatusUpdated implements Action {
	readonly type = AppuserActionTypes.AppusersStatusUpdated;
	constructor(
		public payload: {
			appusers: AppuserModel[];
			status: number;
		}
	) {}
}
export class OneAppuserDeleted implements Action {
	readonly type = AppuserActionTypes.OneAppuserDeleted;
	constructor(public payload: { id: number }) {}
}

export class ManyAppusersDeleted implements Action {
	readonly type = AppuserActionTypes.ManyAppusersDeleted;
	constructor(public payload: { ids: number[] }) {}
}
export class AppusersPageRequested implements Action {
	readonly type = AppuserActionTypes.AppusersPageRequested;
	constructor(public payload: { appuser: AppuserModel[]; totalCount: number }) {}
}
export class AppusersPageLoaded implements Action {
	readonly type = AppuserActionTypes.AppusersPageLoaded;
	constructor(public payload: { appusers: AppuserModel[]; totalCount: number }) {}
}
export class AppusersPageCancelled implements Action {
	readonly type = AppuserActionTypes.AppusersPageCancelled;
}
export class AppusersPageToggleLoading implements Action {
	readonly type = AppuserActionTypes.AppuserActionToggleLoading;
	constructor(public payload: { isLoading: boolean }) {}
}

export class AppuserActionToggleLoading implements Action {
	readonly type = AppuserActionTypes.AppuserActionToggleLoading;
	constructor(public payload: { isLoading: boolean }) {}
}

export type AppuserActions =
	| AppuserOnServerCreated
	| AppuserCreated
	| AppuserUpdated
	| AppusersStatusUpdated
	| OneAppuserDeleted
	| ManyAppusersDeleted
	| AppusersPageRequested
	| AppusersPageLoaded
	| AppusersPageCancelled
	| AppusersPageToggleLoading
	| AppuserActionToggleLoading;
