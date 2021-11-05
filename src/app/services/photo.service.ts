import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class MasterListService {
	masterList: Observable<any>;

	constructor(private httpClient: HttpClient) {}

	getMasterList() {
		this.masterList = this.httpClient.get('https://swapi.dev/api/films');
		this.masterList.subscribe((data) => {
			console.log('Data', data.results);
		});
	}
}
