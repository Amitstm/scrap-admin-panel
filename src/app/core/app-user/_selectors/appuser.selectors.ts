import { createFeatureSelector, createSelector } from '@ngrx/store';
import { each } from 'lodash';
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
import { AppusersState } from '../_reducers/appuser.reducers';
import { AppuserModel } from '../_models/appuser.model';

export const selectAppusersState = createFeatureSelector<AppusersState>('appusers');
export const selectAppuserById = (appuserId: number) =>
	createSelector(selectAppusersState, (appusersState) => appusersState.entities[appuserId]);

export const selectAppusersPageLoading = createSelector(
	selectAppusersState,
	(appusersState) => appusersState.listLoading
);

export const selectAppusersActionLoading = createSelector(
	selectAppusersState,
	(appusersState) => appusersState.actionsloading
);

export const selectLastCreatedAppuserId = createSelector(
	selectAppusersState,
	(appusersState) => appusersState.lastCreatedAppuserId
);

export const selectAppusersShowinitWaitingMessage = createSelector(
	selectAppusersState,
	(appusersState) => appusersState.showInitWaitingMessage
);

export const selectAppusersInStore = createSelector(selectAppusersState, (appusersState) => {
	const items: AppuserModel[] = [];
	each(appusersState.entities, (element) => {
		items.push(element);
	});
	const httpExtension = new HttpExtenstionsModel();
	const result: AppuserModel[] = httpExtension.sortArray(
		items,
		appusersState.lastQuery.sortField,
		appusersState.lastQuery.sortOrder
	);
	return new QueryResultsModel(result, appusersState.totalCount, '');
});
