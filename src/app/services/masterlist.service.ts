import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MasterListService {
  constructor(public httpClient: HttpClient) {}

  getMasterList() {
    return this.httpClient.get('https://swapi.dev/api/films').pipe(
      map((res: any) => {
        return res.results;
      })
    );
  }

  getMaster(id) {
    return this.httpClient.get('https://swapi.dev/api/films').pipe(
      map((res: any) => {
        const data = res.results;
        return data.find((h) => h.episode_id === id);
      })
    );
  }
}
