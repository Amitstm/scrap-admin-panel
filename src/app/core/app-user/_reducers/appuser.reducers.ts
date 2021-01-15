//NGRX
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
//Actions

//Models
import { AppuserModel } from '../_models/appuser.model';
import { QueryParamsModel } from '../../_base/crud';

export interface AppusersState extends EntityState<AppuserModel> {
	listLoading: boolean;
	actionsloading: boolean;
	totalCount: number;
	lastCreatedAppuserId: number;
	lastQuery: QueryParamsModel;
	showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<AppuserModel> = createEntityAdapter<AppuserModel>();

export const initialAppusersState: AppusersState = adapter.getInitialState({
	appuserForEdit: null,
	listLoading: false,
	actionsloading: false,
	totalCount: 0,
	lastCreatedAppuserId: undefined,
	lastQuery: new QueryParamsModel({}),
	showInitWaitingMessage: true
});
