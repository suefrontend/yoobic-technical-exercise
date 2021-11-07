import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MasterListService {
  masterList: Observable<any>;

  constructor(public httpClient: HttpClient) {}

  getMasterList() {
    return this.httpClient.get('https://swapi.dev/api/films').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getMaster(test) {
    console.log('test', test);
    return this.httpClient.get('https://swapi.dev/api/films').pipe(
      map((res: any) => {
        const data = res.results;
        const target = data.find((h) => h.episode_id === test);
        console.log('4', target);
        return target;
      })
    );

    // const test = this.httpClient
    //   .get('https://swapi.dev/api/films')
    //   .subscribe((res) => {
    //     return res.results.find((h) => h.episode_id === 4);
    // const testObj = this.items;
    // console.log('testObj', testObj);
    // });
  }
}
