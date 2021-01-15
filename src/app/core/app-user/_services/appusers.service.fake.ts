import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, from } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { each } from 'lodash';
import { HttpUtilsService, QueryParamsModel, QueryResultsModel } from '../../_base/crud';
import { AppuserModel } from '../_models/appuser.model';
import { element } from 'protractor';

const API_APPUSERS_URL = 'api/customers';

@Injectable()
export class AppusersService {
	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) {}

	createAppuser(appuser: AppuserModel): Observable<AppuserModel> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.post<AppuserModel>(API_APPUSERS_URL, appuser, { headers: httpHeaders });
	}
	getAllAppusers(): Observable<AppuserModel[]> {
		return this.http.get<AppuserModel[]>(API_APPUSERS_URL);
	}
	getAppuserById(appuserId: number): Observable<AppuserModel> {
		return this.http.get<AppuserModel>(API_APPUSERS_URL + `/${appuserId}`);
	}
	findAppusers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		// This code imitates server calls
		const url = API_APPUSERS_URL;
		return this.http.get<AppuserModel[]>(API_APPUSERS_URL).pipe(
			mergeMap((res) => {
				const result = this.httpUtils.baseFilter(res, queryParams, [ 'status', 'type' ]);
				return of(result);
			})
		);
	}
	updateAppuser(appuser: AppuserModel): Observable<any> {
		const httpHeader = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_APPUSERS_URL, appuser, { headers: httpHeader });
	}
	updateStatusForAppuser(appusers: AppuserModel[], status: number): Observable<any> {
		const tasks$ = [];
		each(appusers, (element) => {
			const _appuser = Object.assign({}, element);
			_appuser.status = status;
			tasks$.push(this.updateAppuser(_appuser));
		});
		return forkJoin(tasks$);
	}
	deleteAppuser(appuserId: number): Observable<any> {
		const url = `${API_APPUSERS_URL}/${appuserId}`;
		return this.http.delete<AppuserModel>(url);
	}
	deleteAppusers(ids: number[] = []): Observable<any> {
		const tasks$ = [];
		const length = ids.length;
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteAppuser(ids[i]));
		}
		return forkJoin(tasks$);
	}
}
