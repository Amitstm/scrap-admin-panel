// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// CRUD
import { HttpUtilsService, QueryParamsModel, QueryResultsModel } from '../../_base/crud';
// Models
import { AppuserModel } from '../_models/appuser.model';

const API_APPUSERS_URL = 'api/appusers';
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
		return this.http.get<AppuserModel>(API_APPUSERS_URL + `${appuserId}`);
	}
	findAppusers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const httpParams = this.httpUtils.getFindHTTPParams(queryParams);
		const url = API_APPUSERS_URL + '/find';
		return this.http.get<QueryResultsModel>(url, {
			headers: httpHeaders,
			params: httpParams
		});
	}
	updateAppuser(appuser: AppuserModel): Observable<any> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_APPUSERS_URL, appuser, { headers: httpHeaders });
	}
	updateStatusForAppuser(appusers: AppuserModel[], status: number): Observable<any> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = {
			appusersForUpdate: appusers,
			newStatus: status
		};
		const url = API_APPUSERS_URL + 'updateStatus';
		return this.http.put(url, body, { headers: httpHeaders });
	}

	deleteAppusers(ids: number[] = []): Observable<any> {
		const url = API_APPUSERS_URL + '/deleteAppusers';
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = { appuserIdsForDelete: ids };
		return this.http.put<QueryResultsModel>(url, body, { headers: httpHeaders });
	}
}
