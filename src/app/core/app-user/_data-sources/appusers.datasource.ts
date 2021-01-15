import { mergeMap, tap } from 'rxjs/operators';
// RxJS
import { delay, distinctUntilChanged, skip, filter, take, map } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CRUD
import { BaseDataSource, QueryResultsModel } from '../../_base/crud';
// State
import { AppState } from '../../reducers';

import {
	selectAppusersInStore,
	selectAppusersPageLoading,
	selectAppusersShowinitWaitingMessage
} from '../_selectors/appuser.selectors';

export class AppusersDataSource extends BaseDataSource {
	constructor(private store: Store<AppState>) {
		super();
		this.loading$ = this.store.pipe(select(selectAppusersPageLoading));
		this.isPreloadTextViewed$ = this.store.pipe(select(selectAppusersShowinitWaitingMessage));
		this.store.pipe(select(selectAppusersInStore)).subscribe((response: QueryResultsModel) => {
			this.paginatorTotalSubject.next(response.totalCount);
			this.entitySubject.next(response.items);
		});
	}
}
