import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasicHttpService {
	constructor(private _http: HttpClient) {

	}

	public get(url: string): Promise<any> {
		return this._http.get(url).toPromise();
	}

	public post(url: string, body: string): Promise<any> {
		return this._http.post(url, body).toPromise();
	}
}